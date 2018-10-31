import { Component, OnInit } from '@angular/core';
import { Comida } from 'src/app/models/comida';
import { ComidaService } from '../../services/Comida.service';



@Component({
  selector: 'app-postres',
  templateUrl: './postres.component.html',
  styleUrls: ['./postres.component.css']
})
export class PostresComponent implements OnInit {

  comidas = [];
  precio: number;
  nombre: string;
  imagen: string;
  id:number;
  tipo: string;


  constructor(public comidaService: ComidaService) { }

  ngOnInit() {this.comidaService.getComida().subscribe(comidas => {
    this.comidas = comidas;
      console.log(comidas);
    });
  }


}
