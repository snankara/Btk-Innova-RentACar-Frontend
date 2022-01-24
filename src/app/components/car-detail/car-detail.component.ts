import { CarService } from './../../services/car.service';
import { CarModel } from './../../models/carModel';
import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {

  car: CarModel;
  
  constructor(private activatedRoute:ActivatedRoute, private carService: CarService, private router: Router, private cd: ChangeDetectorRef) { }

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

  nextPage() {
    this.router.navigate(['rentstep/rent/'+this.car.id]);
      return;
  }
}
