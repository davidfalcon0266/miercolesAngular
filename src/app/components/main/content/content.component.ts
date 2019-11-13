import { Component, OnInit } from '@angular/core';
import { usuarioModels } from '../../model/usuarioModels';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  usuarios: usuarioModels;

  constructor() { 

this.usuarios = new usuarioModels();

this.usuarios.fecha = 45461;
  }

  ngOnInit() {
  }

  verificar( form: NgForm) {
console.log(form);

  }

}
