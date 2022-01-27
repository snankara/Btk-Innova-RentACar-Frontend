import { PaymentModel } from './../models/paymentModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseModel';
import { CreatePaymentModel } from './../models/createPaymentModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl: string = `${environment.apiUrl}payments`

  constructor(private httpClient: HttpClient) { }

  add(createPaymentModel: CreatePaymentModel): Observable<SingleResponseModel<PaymentModel>>{
    return this.httpClient.post<SingleResponseModel<PaymentModel>>(`${this.apiUrl}/add`, createPaymentModel);
  }
}
