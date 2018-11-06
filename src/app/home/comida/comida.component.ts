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
comidasFiltradas = [];
    precio: number;
    nombre: string;
    imagen: string;
    id:number;
    tipo: string;
    comidaForm:FormGroup; /// esto iria en la vista de admin

 
  
  constructor(public comidaService: ComidaService ,private fb:FormBuilder) {

    //esto iria en la vista de admin para crear un form y agregar comidas
   
    this.comidaForm=fb.group({
      nombre: ["",Validators.required],
      imagen:["",Validators.required],
      tipo: ["",Validators.required],
      prrecio: ["",Validators.required]


    })
 


  }
  private buildForm(){
    
  }

  ngOnInit() { this.comidaService.getComida().subscribe(comidas => {
    this.comidas = comidas;
    console.log(comidas);
    this.comidasFiltradas = [];
    this.comidasFiltradas = this.comidas.filter(comida => {
      if (comida.tipo == 'almuerzo') {
        return comida;
      }
    })
  });
  }

  }
