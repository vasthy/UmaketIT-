import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  emails:string;
  passwords: string;

  constructor(public authservice:AuthserviceService, public router:Router) 
  { 
   
  }

  ngOnInit() {
  
 //metodo registro
 // Tiene que llamar al servicio de auth
 // al servicio de usuarios 
 // implementar un router 
 
  this.authservice.password=this.passwords;
  this.authservice.email=this.emails;
 
  
  }

  Googlelogin(){
    this.authservice.login()
      .then((res)=>{
        
       this.router.navigateByUrl('/home/inicio');
      }).catch(err=> console.log(err.message));
   }

   CrearUser(){
     this.authservice.CreateUser();
     
   }
}
