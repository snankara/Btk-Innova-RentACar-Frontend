import { CarService } from './../../services/car.service';
import { CarModel } from './../../models/carModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car : CarModel;

  constructor(private activatedRoute:ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.getById();
  }

  getById(){
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.carService.getById(params['id']).subscribe(response => {
          this.car = response.data
        })
      }
    })
  }
}
