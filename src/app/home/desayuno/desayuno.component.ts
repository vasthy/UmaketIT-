import { Component, OnInit } from '@angular/core';

class desayuno {
  precio: number;
  nombre: string;
  imagen: string;

}


@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {

  Desayunos: Array<desayuno> = 
  [
    {
      "precio":1,
      "nombre":"DESAYUNO 1",
      "imagen":"desayuno1"
    },
    {
      "precio":2,
      "nombre":"DESAYUNO 2",
      "imagen":"desayuno2"
    }, {
      "precio":3,
      "nombre":"DESAYUNO 3",
      "imagen":"desayuno3"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
