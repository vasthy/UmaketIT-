import { Component, OnInit } from '@angular/core';

import { Comida } from 'src/app/models/comida';
import { ComidaService } from '../../services/Comida.service';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {

  comidas = [];
  comidasFiltradas = [];
  precio: number;
  nombre: string;
  imagen: string;
  id:number;
  tipo: string;


  constructor(public comidaService: ComidaService) { }

  ngOnInit() {
    
    this.comidaService.getComida().subscribe(comidas => {
       this.comidas = comidas;
        console.log(comidas);
        this.comidasFiltradas = [];
       this.comidasFiltradas = this.comidas.filter(comida=>{
        if(comida.tipo == 'desayuno'){
          return comida;
        }
      })
    });
  }

}
