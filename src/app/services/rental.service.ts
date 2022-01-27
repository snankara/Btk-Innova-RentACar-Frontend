import { RentalModel } from './../models/rentalModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ResponseModel } from './../models/responseModel';
import { CreateRentalModel } from './../models/createRentalModel';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl: string = `${environment.apiUrl}rentals`
  constructor(private httpClient: HttpClient) { }

  rentForIndividualCustomer(rental: CreateRentalModel): Observable<SingleResponseModel<RentalModel>>{    
    return this.httpClient.post<SingleResponseModel<RentalModel>>(`${this.apiUrl}/rentforindividualcustomer`, rental);
  }

  rentForCorporateCustomer(rental: CreateRentalModel): Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/rentforcorporatecustomer`, rental);
  }
}
