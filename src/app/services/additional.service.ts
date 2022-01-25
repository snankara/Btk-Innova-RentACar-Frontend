import { AdditionalListModel } from './../models/additionalListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditionalService {
  apiUrl: string = `${environment.apiUrl}additionals`

  constructor(private httpClient: HttpClient) { }

  getAdditionals(): Observable<ListResponseModel<AdditionalListModel>>{
    return this.httpClient.get<ListResponseModel<AdditionalListModel>>(`${this.apiUrl}/getall`);
  }
}
