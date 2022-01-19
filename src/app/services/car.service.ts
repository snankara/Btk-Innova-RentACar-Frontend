import { CarModel } from './../models/carModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { CarListModel } from './../models/carListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl: string = `${environment.apiUrl}cars`
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<CarListModel>>{
    return this.httpClient.get<ListResponseModel<CarListModel>>(`${this.apiUrl}/getall`)
  }

  getById(carId: number): Observable<SingleResponseModel<CarModel>>{
    return this.httpClient.get<SingleResponseModel<CarModel>>(`${this.apiUrl}/getbyid?id=${carId}`);
  }
}
