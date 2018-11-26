import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import {  Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  email:string;
  password:string;
  userKey: string;


  constructor(public afAuth: AngularFireAuth, public router: Router) {
      
   }

  login() {
   return  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
   this.afAuth.auth.signOut().then((res)=>{
     this.router.navigateByUrl('/login');
   }).catch(err=> console.log(err.message));
  }

  CreateUser(){
     this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password);
  }


  
}
