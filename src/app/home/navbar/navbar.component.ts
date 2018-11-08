import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice.service';
import {  Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {
 public name:any;
  public state: string='';

  constructor(public authservice:AuthserviceService, public router:Router) { 
    this.authservice.afAuth.authState.subscribe(auth =>{
      if(auth){
        this.name = auth;
      }
     // router.navigate(["login"])
    });
  }

  Logout(){
    this.authservice.logout();
  
  }

  ngOnInit() {
  }

}
