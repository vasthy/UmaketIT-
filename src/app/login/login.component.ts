import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import {  Router} from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Users } from '../models/Users';
import { User } from 'firebase';
import { UsuarioService } from '../services/Usuarios.service';
import { stringify } from 'querystring';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 usuarios=[];
 nombre:string;
 apellido:string;
 email:string;
 contrasena:string;


 usuarioForm:FormGroup;
 loginForm:FormGroup;
 modalref:BsModalRef;

 

  constructor(public authservice:AuthserviceService, public router:Router, public UsuarioService:UsuarioService,private modalService: BsModalService, private fb: FormBuilder) { 
   this.usuarioForm=fb.group({
     nombre:["",Validators.required],
     apellido:["",Validators.required],
     email:["",Validators.required],
     contrasena:["",Validators.required],
   })

   this.loginForm=fb.group({
    
    contrasena:["",Validators.required],
    email:["",Validators.required],
    
    
   
    
   })


  }

  ngOnInit() {
  
 //metodo registro
 // Tiene que llamar al servicio de auth
 // al servicio de usuarios 
 // implementar un router 
    this.UsuarioService.getUsuarios().subscribe(Users=>{
      this.usuarios=Users;
      console.log(Users);
     });
 
  
  }

  Googlelogin(){
    this.authservice.login()
      .then((res)=>{
        
       this.router.navigateByUrl('/home/inicio');
      }).catch(err=> console.error(err.message));// recordar .error para errores no .log
   }

   

  addUser() {
    console.log("Form", this.usuarioForm.value)
    this.UsuarioService.addUser(this.usuarioForm.value);
    this.authservice.afAuth.auth.createUserWithEmailAndPassword(this.usuarioForm.value.email,this.usuarioForm.value.contrasena);
  }

  IniciarSesion(){
    
    
   this.authservice.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.contrasena).then((res)=>{
     this.router.navigateByUrl('/home/inicio');
    
   }).catch(err=> console.error(err.message));
  }
      
  

    
  }
 
  

