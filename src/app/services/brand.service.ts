import { BrandListModel } from './../models/brandListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl: string = `${environment.apiUrl}brands`

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<ListResponseModel<BrandListModel>>{
    return this.httpClient.get<ListResponseModel<BrandListModel>>(`${this.apiUrl}/getall`);
  }
}
