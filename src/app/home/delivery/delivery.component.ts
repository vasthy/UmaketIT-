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
      "nombre":"jefferson",
      "imagen":"logoD"
    },
    {
      "precio":2,
      "nombre":"yonkleider",
      "imagen":"logoD"
    }, {
      "precio":3,
      "nombre":"anakin skywalker",
      "imagen":"logoD"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
