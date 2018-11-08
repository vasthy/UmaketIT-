import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Comida } from '../models/comida';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ComidaService {
  comidasCollection: AngularFirestoreCollection<Comida>;
  comidas: Observable<Comida[]>;
  comidaDoc: AngularFirestoreDocument<Comida>;


  constructor(public afs: AngularFirestore) {
    this.comidasCollection = afs.collection<Comida>('comidas');
    this.comidas = this.comidasCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Comida;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }



  getComida() {
    return this.comidas;
  }

  addComida(comida: Comida) {
    console.log('Nueva Comida');
    this.comidasCollection.add(comida);
  }

  updateComida(comida: Comida) {
    console.log('actualiza Comida');
    this.comidaDoc = this.afs.doc(`comida/${comida.id}`);
    this.comidaDoc.update(comida);

  }



  deleteComidas(comida: Comida) {
    console.log('borra Comida');
    this.comidaDoc = this.afs.doc(`comida/${comida.id}`)
    this.comidaDoc.delete();
  }
}
