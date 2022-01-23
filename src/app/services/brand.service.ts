import { UpdateBrandModel } from './../models/updateBrandModel';
import { CreateBrandModel } from './../models/createBrandModel';
import { ResponseModel } from './../models/responseModel';
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

  getBrandsDeletedFalse(): Observable<ListResponseModel<BrandListModel>>{
    return this.httpClient.get<ListResponseModel<BrandListModel>>(`${this.apiUrl}/getallisdeletedfalse`);
  }

  add(brand: CreateBrandModel):Observable<ResponseModel>{    
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, brand);
  }

  update(brand: UpdateBrandModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/update`, brand);
  }

  delete(brandId: number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/delete?id=${brandId}`,"");
  } 
}
