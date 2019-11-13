import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  paises: any;


  constructor(private http: HttpClient, 
              private contentService: ContentService) {
    
                this.contentService.mostrar().subscribe(resp =>{
this.paises = resp;
console.log(this.paises)
                })
              }

  ngOnInit() {
  }

}
