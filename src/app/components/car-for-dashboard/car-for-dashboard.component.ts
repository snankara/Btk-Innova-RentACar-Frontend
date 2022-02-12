import { CarService } from './../../services/car.service';
import { CarListModel } from './../../models/carListModel';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-car-for-dashboard',
  templateUrl: './car-for-dashboard.component.html',
  styleUrls: ['./car-for-dashboard.component.css'],
  providers: [MessageService]
})
export class CarForDashboardComponent implements OnInit {

  cars : CarListModel[]
  loading: boolean = false;
  skeletonValue: any[] = [0,1,2,3,4,5,6,7,8,9]
  
  constructor(private carService: CarService) { }

  ngOnInit(): void { 
    this.getCars()
  }

  getCars(){
    this.loading = true;

      setTimeout(() => {
        this.carService.getCars().subscribe(response => {
          this.cars = response.data
          this.loading = false;
        })
      }, 2000);
  }

}
