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
    this.url = " https://pavii.ddns.net/api/empresas"
  }
  
  get(){
    return this.httpClient.get(this.url)
  }

 
}