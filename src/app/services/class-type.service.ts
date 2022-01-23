import { ClassTypeListModel } from './../models/classTypeListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassTypeService {

  apiUrl: string = `${environment.apiUrl}classtypes/`

  constructor(private httpClient: HttpClient) { }

  getClassTypes(): Observable<ListResponseModel<ClassTypeListModel>>{
    return this.httpClient.get<ListResponseModel<ClassTypeListModel>>(`${this.apiUrl}getall`)
  }
}
