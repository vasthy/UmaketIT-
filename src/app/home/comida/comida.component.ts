import { Component, OnInit } from '@angular/core';

class comida {
    precio: number;
    nombre: string;
    imagen: string;
    id:number;
  
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
      
      "nombre":"PASTICHO",
      "imagen":"pasticho",
      "precio":200,"id":1
      
      
    },
    {
      
      "nombre":"PAELLA",
      "imagen":"paella",
      "precio":300,"id":2
      
    }, {
      
      "nombre":"PABELLON",
      "imagen":"pabellon",
      "precio":150,"id":3,
    },
  ]

  constructor() { }

  ngOnInit() {

  }

}
