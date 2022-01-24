import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CityListModel } from 'src/app/models/cityListModel';
import { CityService } from 'src/app/services/city.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
  providers: [DatePipe]
})
export class RentalAddComponent implements OnInit {
  rentalAddForm: FormGroup
  cities: CityListModel[]
  carId: number

  constructor(private rentalService: RentalService, private activatedRoute: ActivatedRoute, 
    private formBuilder:FormBuilder, private cityService: CityService, 
    private datePipe:DatePipe, private toastrService: ToastrService, private router: Router) { }

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
        this.carId = params["id"]
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

    nextPage() {
      if (this.rentalAddForm.valid) {
        this.router.navigate(['rentstep/additional/'+this.carId]);
        return;  
      }
    }

    prevPage(){
      this.router.navigate(['rentstep/car/'+this.carId]);
    }
  
}
