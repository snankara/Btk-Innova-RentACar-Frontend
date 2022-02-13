import { PageModel } from './../../models/pageModel';
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
  totalCount: number = 0
  first: number = 0;
  loading: boolean = false;
  pageModel : PageModel = new PageModel()

  skeletonValue: any[] = [0,1,2,3,4,5,6,7,8,9]
  
  constructor(private carService: CarService) { }

  ngOnInit(): void { 
    this.getCars(this.pageModel);
  }

  getCars(pageModel: PageModel){
    this.loading = true;

      setTimeout(() => {
        this.carService.getCars(pageModel).subscribe(response => {
          this.cars = response.data
          this.totalCount = response.totalCount;
          this.loading = false;          
        })
      }, 2000);
  }

  loadMoreCars(event: any){
    this.pageModel.page = event.page;
    this.pageModel.pageSize = event.rows;
    this.first = event.page * event.rows
    this.getCars(this.pageModel);
  }
}
