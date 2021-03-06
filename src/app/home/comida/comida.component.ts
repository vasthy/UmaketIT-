import { Component, OnInit, TemplateRef } from '@angular/core';
import { Comida } from '../../models/comida';
import { ComidaService } from '../../services/Comida.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize, tap } from 'rxjs/operators';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { UsuarioService } from 'src/app/services/Usuarios.service';
import { auth } from 'firebase';
import { Users } from 'src/app/models/Users';




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
  comidatoEdit:Comida;
  editState: boolean=false;
  isAdmin: boolean = false;
  /// esto iria en la vista de admin
  comidaForm: FormGroup; 
  



  constructor(public comidaService: ComidaService,private storage: AngularFireStorage,private modalService: BsModalService, private fb: FormBuilder,private auth: AuthserviceService; private usuario:UsuarioService) {
   //esto iria en la vista de admin para crear un form y agregar comidas
     this.comidaForm = fb.group({
      nombre: ["", Validators.required],
      descripcion:["", Validators.required],
      tipo: ["", Validators.required],
      precio: ["", Validators.required],
      imagen: ["", Validators.required],
    })
    this.usuario.getUsuario(auth.userKey).subscribe((user:Users[])=>{
      this.isAdmin = user[0].admin;
      console.log("00>",user[0])
    });
    
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
  
  updateComida(comida){
    this.comidaService.updateComida(comida);
    this.comidatoEdit=null;
    this.editState=false;
  
}

EditComida(comida){
  this.editState=true;
  this.comidatoEdit=comida;

}

}
