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
    // this.http.get('https://restcountries.eu/rest/v2/all').subscribe(data => {
      // console.log( data );
    //   this.paises = data;
    //   console.log(this.paises);
    // });

    this.contentService.mostrar((data: any) => {
    console.log(data)
    })


   }

  ngOnInit() {
  }

}
