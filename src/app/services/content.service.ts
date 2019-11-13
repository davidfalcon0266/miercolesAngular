import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  paises: any;

  constructor( private http: HttpClient ) {

     }
    

     mostrar(){
      return this.http.get('https://restcountries.eu/rest/v2/all');
}