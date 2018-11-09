import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import {  Router} from '@angular/router';
import { Users } from '../../models/Users';
import { User } from 'firebase';
import { UsuarioService } from '../../services/Usuarios.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {
 public usuario:any;
 nombre:string;
 User: Users;
 
 

  constructor(public authservice:AuthserviceService, public router:Router) { 
    this.authservice.afAuth.authState.subscribe(auth =>{
      if(auth){
        this.usuario = auth;
        
       }else if(this.User.uid){
         this.usuario=auth.email;

       }

     // router.navigate(["login"])
    });

    
  }

  Logout(){
    this.authservice.logout();
    this.authservice.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
