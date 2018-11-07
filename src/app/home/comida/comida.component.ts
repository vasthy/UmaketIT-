import { Component, OnInit, TemplateRef } from '@angular/core';
import { Comida } from 'src/app/models/comida';
import { ComidaService } from '../../services/Comida.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';



@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {
  comidas = [];


  comidasFiltradas = [];
  precio: number;
  nombre: string;
  imagen: string;
  id?: number;
  tipo: string;
  descripcion: string;

  /// esto iria en la vista de admin
  comidaForm: FormGroup; 
  modalRef: BsModalRef;
  downloadURL: Observable<string>;
  urlReady = false;
  uploadPercent: Observable<number>;



  constructor(public comidaService: ComidaService, private storage: AngularFireStorage, private modalService: BsModalService, private fb: FormBuilder) {

    //esto iria en la vista de admin para crear un form y agregar comidas

    this.comidaForm = fb.group({
      name: ["", Validators.required],
      image: ["", Validators.required],
      tipo: ["", Validators.required],
      price: ["", Validators.required]


    })


  }
  onSubmit(value){
    console.log("Form",value)
    this.comidaForm.value.image_url = this.downloadURL;
    this.comidaService.addComida(this.comidaForm.value)
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  addComida() {
    this.comidaForm.value.imagen = this.imagen;
    console.log("Form", this.comidaForm.value)
    this.comidaService.addComida(this.comidaForm.value)
  }
  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'foodImages/'.concat(file.name);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    console.log("entre", file)
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url=>{
            this.downloadURL = url;  
            console.log("URL",this.downloadURL)
            this.urlReady = true;
          })
          ;
        } )
     )
    .subscribe()
  }

  ngOnInit() {
    this.comidaService.getComida().subscribe(comidas => {
      this.comidas = comidas;
      console.log(comidas);
      this.comidasFiltradas = [];
      this.comidasFiltradas = this.comidas.filter(comida => {
        if (comida.tipo == 'almuerzo') {
          return comida;
        }
      })
    });
  }

}
