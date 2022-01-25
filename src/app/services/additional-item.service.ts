import { ResponseModel } from './../models/responseModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateAdditionalItemModel } from '../models/createAdditionalItemModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditionalItemService {
  apiUrl: string = `${environment.apiUrl}additionalitems`

  constructor(private httpClient: HttpClient) { }

  add(createAdditionalItems: CreateAdditionalItemModel[]): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`,createAdditionalItems);
  }
}
