import { DatePipe } from '@angular/common';
import { CityService } from './../../services/city.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityListModel } from 'src/app/models/cityListModel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
  providers:[DatePipe]
})
export class RentalComponent implements OnInit {
 
  rentalAddForm: FormGroup
  cities: CityListModel[]
  carId: number

  constructor(private rentalService: RentalService, private activatedRoute: ActivatedRoute, 
              private formBuilder:FormBuilder, private cityService: CityService, 
              private datePipe:DatePipe, private toastrService: ToastrService) { }


  ngOnInit(): void {
    this.getRouteCarId();
    this.createRentalAddForm();
    this.getCities()
  }

  createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
      rentDate: ["", Validators.required],
      returnDate: ["", Validators.required],
      rentedKilometer: ["", Validators.required],
      returnedKilometer: ["", Validators.required],
      customerId: [1, Validators.required],
      carId: [this.carId ,Validators.required],
      rentedCityId: ["", Validators.required],
      returnedCityId: ["", Validators.required]
    })
  }
 
  getRouteCarId(){
    this.activatedRoute.params.subscribe(params => { 
      this.carId = parseInt(params["id"])
    })
  }

  add(){
    if (this.rentalAddForm.valid) {
      this.rentalAddForm.value.rentDate = this.getFormattedDate(this.rentalAddForm.value.rentDate);
      this.rentalAddForm.value.returnDate = this.getFormattedDate(this.rentalAddForm.value.returnDate)
      
      let rentalModel = Object.assign({}, this.rentalAddForm.value)
      this.rentalService.rentForIndividualCustomer(rentalModel).subscribe(response => {
        if (response.success) {
          this.toastrService.success(response.message, "Succesful !")
        }
        else{
          this.toastrService.error(response.message, "Error !")
        }
      })
    }
  }

  getCities(){
    this.cityService.getCities().subscribe(response => {
      this.cities = response.data
    })
  }

  getFormattedDate(date: Date){
   return this.datePipe.transform(new Date(date), 'yyyy-MM-dd')
  }
}
