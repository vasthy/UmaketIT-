import { Component, OnInit } from '@angular/core';

class postre{
  precio: number;
  nombre: string;
  imagen: string;

}

@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {


  Postres: Array<postre> = 
  [
    {
      "precio":1,
      "nombre":"POSTRE 1",
      "imagen":"postre1"
    },
    {
      "precio":2,
      "nombre":"POSTRE 2",
      "imagen":"postre2"
    }, {
      "precio":3,
      "nombre":"POSTRE 3",
      "imagen":"postre3"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
