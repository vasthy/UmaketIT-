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
  
    addUser(Usuario: Users) {
      console.log('Nuevo usuario');
      this.usuariosCollection.add(Usuario);
      
    }
  
    updateUser(Usuario: Users) {
      console.log('actualiza usuario');
      this.usuarioDoc = this.afs.doc(`comida/${Usuario.password}`);
      this.usuarioDoc.update(Usuario);
  
    }
}