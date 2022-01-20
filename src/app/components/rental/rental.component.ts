import { CityService } from './../../services/city.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityListModel } from 'src/app/models/cityListModel';
import { CityModel } from 'src/app/models/cityModel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
  providers:[DatePipe]
})
export class RentalComponent implements OnInit {
 
  rentalAddForm: FormGroup
  carId: number
  cities: CityListModel[]

  constructor(private rentalService: RentalService, private activatedRoute: ActivatedRoute, 
              private formBuilder:FormBuilder, private cityService: CityService, private datePipe:DatePipe) { }

  ngOnInit(): void {
    this.getRouteCarId()
    this.getCities()
    this.createRentalAddForm();
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
    console.log(this.rentalAddForm.value);
    
  }

  getCities(){
    this.cityService.getCities().subscribe(response => {
      this.cities = response.data
    })
  }

  getFormattedRentDate(event:any){
    console.log(event.target.value);
    
    return this.rentalAddForm.value.rentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

  getFormattedReturnDate(){
    return this.rentalAddForm.value.returnDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd')
  }

}
