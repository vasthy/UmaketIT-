import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Users } from '../models/Users';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
    usuariosCollection: AngularFirestoreCollection<Users>;
    usuarios: Observable<Users[]>;
    usuarioDoc: AngularFirestoreDocument<Users>;
  
  
    constructor(public afs: AngularFirestore) {
      this.usuariosCollection = afs.collection<Users>('Users');
      this.usuarios = this.usuariosCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Users;
          const id = a.payload.doc.id;
          return { id ,...data };
        }))
      );
    }
  
  
  
    getUsuarios() {
      return this.usuarios;
    }
  
    getUsuario(id:string) {
      console.log("KEY",id)
      return this.afs.collection(`Users`, ref => ref.where("user_id","==",id)).valueChanges();
    }

    getAllUsers() {
      return this.afs.collection(`Users`).snapshotChanges();
    }

    addUser(Usuario: Users) {
      console.log('Nuevo usuario');
      this.usuariosCollection.add(Usuario);
      
    }
  
    updateUserAdmin(Usuario: Users,id:string) {
      console.log('actualiza usuario status');
      Usuario.admin = false;
     //this.afs.collection(`Users`).doc(id).update(Usuario).then(data=>{
     //   console.log(`yes`)
     // });
     //this.usuarioDoc.update(Usuario);
    }

    updateUser(Usuario: Users) {
      console.log('actualiza usuario');
      this.usuarioDoc = this.afs.doc(`Users/${Usuario.uid}`);
      this.usuarioDoc.update(Usuario);
    }
}