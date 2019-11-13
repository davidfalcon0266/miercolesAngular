import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
 export class ContentService {

  paises: any;

  constructor( private http: HttpClient ) {
this.paises = environment.url;

     }
           mostrar() {
          return this.http.get(this.paises);
               }
              }