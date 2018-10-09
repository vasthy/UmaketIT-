import { Component, OnInit } from '@angular/core';

class deliverys {
  precio: number;
  nombre: string;
  imagen: string;

}

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  Delive: Array<deliverys> = 
  [
    {
      "precio":1,
      "nombre":"Juan Rosales",
      "imagen":"logoD"
    },
    {
      "precio":2,
      "nombre":"Pedro Martinez",
      "imagen":"logoD"
    }, {
      "precio":3,
      "nombre":"Cristiano Ronaldo",
      "imagen":"logoD"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
