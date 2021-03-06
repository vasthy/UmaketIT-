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
 registerBol: boolean = false;

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
 
     this.UsuarioService.getAllUsers().subscribe(users=>{
       users.forEach(user=>{
         console.log(`¿¿_`,user.payload.doc.id)
         this.UsuarioService.updateUserAdmin(user.payload.doc.data(),user.payload.doc.id)
       })
     })
  
  }

  Googlelogin(){
    this.authservice.login()
      .then((res)=>{
       this.authservice.userKey = res.user.uid;
       this.router.navigateByUrl('/home/inicio');
      }).catch(err=> console.error(err.message));// recordar .error para errores no .log
   }

   

  addUser() {
    console.log("Form", this.usuarioForm.value)
    this.usuarioForm.value.admin = false;
    this.closeModal();
    this.UsuarioService.addUser(this.usuarioForm.value);
    this.authservice.afAuth.auth.createUserWithEmailAndPassword(this.usuarioForm.value.email,this.usuarioForm.value.contrasena).then(user=>{
      user.user.updateProfile({ displayName:this.usuarioForm.value.nombre, photoURL:"https://firebasestorage.googleapis.com/v0/b/umakeit-3b4e1.appspot.com/o/imagenes%2Fuser_male2-256.png?alt=media&token=51fc8b39-08f4-4131-8140-ec7733d45a1e"})
    }).then(change=>{
      this.router.navigateByUrl('/login');
    }).catch(err=> console.log(err.message));
   
    
  }

  IniciarSesion(){
    
    this.authservice.afAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email,this.loginForm.value.contrasena).then((res)=>{
      this.authservice.userKey = res.user.uid;
     this.router.navigateByUrl('/home/inicio');
     this.resetform();
   }).catch(err=> console.error(err.message));
   var User= this.authservice.afAuth.auth.currentUser;

   if(User!=null){
     User.providerData.forEach(function (profile) {
       console.log("Sign-in provider: " + profile.providerId);
       console.log("  Provider-specific UID: " + profile.uid);
       console.log("  Name: " + profile.displayName);
       console.log("  Email: " + profile.email);
       console.log("  Photo URL: " + profile.photoURL);
     });
   }
  }

  resetform(){
    this.usuarioForm.reset();
  }
  
  closeModal(){
    document.getElementById('M').style.display='none'; 
    this.registerBol = false
  }

  register(){
    this.registerBol = true;
    document.getElementById('M').style.display='block';
  }  

    
  }
 
  

