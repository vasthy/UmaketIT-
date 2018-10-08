import { Component, OnInit } from '@angular/core';

class comida {
    precio: number;
    nombre: string;
    imagen: string;
  
}

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {
  
  Comidas: Array<comida> = 
  [
    {
      "precio":1,
      "nombre":"PASTICHO",
      "imagen":"pasticho"
    },
    {
      "precio":2,
      "nombre":"PAELLA",
      "imagen":"paella"
    }, {
      "precio":3,
      "nombre":"PABELLON",
      "imagen":"pabellon"
    },
  ]

  constructor() { }

  ngOnInit() {

  }

}
