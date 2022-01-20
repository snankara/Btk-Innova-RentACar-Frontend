import { CreateColorModel } from './../models/createColorModel';
import { ResponseModel } from './../models/responseModel';
import { ColorListModel } from './../models/colorListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  
  apiUrl: string = `${environment.apiUrl}colors`

  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<ColorListModel>>{
    return this.httpClient.get<ListResponseModel<ColorListModel>>(`${this.apiUrl}/getall`);
  }
  
  add(color: CreateColorModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`, color);
  }
}
