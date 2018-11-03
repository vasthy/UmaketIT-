import { Component, OnInit } from '@angular/core';
import { Comida } from 'src/app/models/comida';
import { ComidaService } from '../../services/Comida.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';



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
    tipo: string;
    // comidaForm:FormGroup; /// esto iria en la vista de admin

 

  constructor(public comidaService: ComidaService /*,private fb:FormBuilder*/ ) {

    //esto iria en la vista de admin para crear un form y agregar comidas
    /*
    this.comidaForm=fb.group({
      nombre: ["",Validators.required],
      imagen:["",Validators.required],
      tipo: ["",Validators.required],

    })*/
 


  }

  ngOnInit() {this.comidaService.getComida().subscribe(comidas => {
    this.comidas = comidas;
      console.log(comidas);
    });

  }

  }
