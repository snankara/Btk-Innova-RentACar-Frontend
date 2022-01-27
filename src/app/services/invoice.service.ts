import { ListResponseModel } from './../models/listResponseModel';
import { InvoiceListModel } from './../models/invoiceListModel';
import { CreateInvoiceModel } from './../models/createInvoiceModel';
import { ResponseModel } from './../models/responseModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  apiUrl: string = `${environment.apiUrl}invoices`

  constructor(private httpClient: HttpClient) { }

  add(createInvoiceModel: CreateInvoiceModel): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/add`,createInvoiceModel);
  }

  getAll(): Observable<ListResponseModel<InvoiceListModel>>{
    return this.httpClient.get<ListResponseModel<InvoiceListModel>>(`${this.apiUrl}/getall`);
  }
}
