import { Injectable } from '@angular/core';
import {
 HttpClient,
 HttpHeaders,
 HttpErrorResponse,
 HttpParams
} from "@angular/common/http";
import { of } from "rxjs";
import { Empresas } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})

export class EmpresasService {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = "https://pavii.ddns.net/api/empresas"
  }
  
  get(){
    return this.httpClient.get(this.url)
  }

  getById(Id: number) {
    return this.httpClient.get(this.url + Id);
  }

   post(obj:Empresas) {
    return this.httpClient.post(this.url, obj);
  }

  put(Id: number, obj:Empresas) {
    return this.httpClient.put(this.url + Id, obj);
  }

  delete(Id) {
    return this.httpClient.delete(this.url + Id);
  }


 
}