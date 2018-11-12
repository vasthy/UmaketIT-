import { Component, OnInit, TemplateRef } from '@angular/core';
import { Comida } from '../../models/comida';
import { ComidaService } from '../../services/Comida.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize, tap } from 'rxjs/operators';



@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {
  comidas = [];


  comidasFiltradas = [];
  precio: string;
  nombre: string;
  imagen: string;
  id: string;
  tipo: string;
  descripcion: string;

  /// esto iria en la vista de admin
  comidaForm: FormGroup; 
  



  constructor(public comidaService: ComidaService,private storage: AngularFireStorage,private modalService: BsModalService, private fb: FormBuilder) {
   //esto iria en la vista de admin para crear un form y agregar comidas
     this.comidaForm = fb.group({
      nombre: ["", Validators.required],
      descripcion:["", Validators.required],
      tipo: ["", Validators.required],
      precio: ["", Validators.required],
      imagen: ["", Validators.required],
    })
}

  addComida() {
    console.log("Form", this.comidaForm.value)
    this.comidaService.addComida(this.comidaForm.value);
    this.comidaService.updateComida(this.comidaForm.value);
  }
  

  ngOnInit() {
    this.comidaService.getComida().subscribe(comidas => {
      this.comidas = comidas;
      
      console.log(comidas);
      this.comidasFiltradas = [];
      this.comidasFiltradas = this.comidas.filter(comida => {
        if (comida.tipo == 'almuerzo') {
          return comida;
          console.log(comida);
        }
      })
    });
  }

  EliminarPlato(comida){
    this.comidaService.deleteComidas(comida);
    console.log(comida);
  }

}
