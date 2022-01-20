import { CityListModel } from './../models/cityListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl: string = `${environment.apiUrl}cities`

  constructor(private httpClient: HttpClient) { }

  getCities(): Observable<ListResponseModel<CityListModel>>{
    return this.httpClient.get<ListResponseModel<CityListModel>>(`${this.apiUrl}/getall`);
  }
}
