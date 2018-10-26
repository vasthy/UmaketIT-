import { Component, OnInit } from '@angular/core';
import { Comida } from 'src/app/models/comida';
import { ComidaService } from '../../services/Comida.service';

/*
class comida {
  comidas = [];
    precio: number;
    nombre: string;
    imagen: string;
    id:number;

}
*/
@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {
comidas = [];
precio: number;
    nombre: string;
    imagen: string;
    id:number;
 /*
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
  ]*/

  constructor(private comidaService: ComidaService) { 
 


  }

  ngOnInit() {this.comidaService.getComida().subscribe(comidas => {
    this.comidas = comidas;
      console.log(comidas);
    });

  }

  }
