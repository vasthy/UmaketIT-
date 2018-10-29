import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  email:string;
  password:string;



  constructor(public afAuth: AngularFireAuth) {
      
   }

   login() {
   return  this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  CreateUser(){
     this.afAuth.auth.createUserWithEmailAndPassword(this.email,this.password);
  }


  
}
