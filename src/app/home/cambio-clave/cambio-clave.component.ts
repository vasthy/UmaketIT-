import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import {  Router} from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Users } from '../../models/Users';
import { User } from 'firebase';
import { UsuarioService } from '../../services/Usuarios.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {
  usuarios=[];
  usuarioForm:FormGroup;
  usuario:any;

  constructor(public authservice:AuthserviceService, public router:Router, public UsuarioService:UsuarioService,private modalService: BsModalService, private fb: FormBuilder) { 
    this.usuarioForm=fb.group({
      password:["",Validators.required],
      password2:["",Validators.required],
      password3:["",Validators.required],
      
     
    })
    

    this.authservice.afAuth.authState.subscribe(auth =>{
      if(auth){
        this.usuario = auth;
      }
// router.navigate(["login"])
});
  }
  

  ngOnInit() {
    this.UsuarioService.getUsuarios().subscribe(Users=>{
      this.usuarios=Users;
      console.log(Users);
     });
     
  }

  CambiarContrasena(){
    this.authservice.afAuth.auth.currentUser.updatePassword(this.usuarioForm.value.password2);
    
  }

  resetform(){
    this.usuarioForm.reset();

  }
}
