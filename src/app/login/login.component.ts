import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 

  constructor(public authservice:AuthserviceService, public router:Router) 
  { 
   
  }

  ngOnInit() {
  
 //metodo registro
 // Tiene que llamar al servicio de auth
 // al servicio de usuarios 
 // implementar un router 
 
 
  
  }

  Googlelogin(){
    this.authservice.login()
      .then((res)=>{
        
       this.router.navigateByUrl('/home/inicio');
      }).catch(err=> console.log(err.message));
   }
 
  
}
