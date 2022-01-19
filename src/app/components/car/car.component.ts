import { CarListModel } from './../../models/carListModel';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import {DataViewModule} from 'primeng/dataview';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars : CarListModel[] = []
  dataLoaded : boolean = false;
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

}
