import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  expression = true;
  lista = [{name:"Matias", perfil: 1}, {name:"Octavio", perfil: 2}, {name:"Gabriel", perfil: 3}]

  constructor() { }

  ngOnInit(): void {

  }
   OcultarMostrar() {
    this.expression = !this.expression;
  }
}
