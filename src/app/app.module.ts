import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ComidaComponent } from './home/comida/comida.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ComprasComponent } from './home/compras/compras.component';
import { HistorialComprasComponent } from './home/historial-compras/historial-compras.component';
import { CambioClaveComponent } from './home/cambio-clave/cambio-clave.component';
import { InicioComponent} from './home/inicio/inicio.component';
import { AcercaNComponent } from './home/acerca-n/acerca-n.component';
import { DeliveryComponent } from './home/delivery/delivery.component';
import { DesayunoComponent } from './home/desayuno/desayuno.component';
import { PostresComponent } from './home/postres/postres.component';



const appRoutes: Routes=[

  {path: '', redirectTo:'/login', pathMatch:'full'},
  {path: 'home', component: HomeComponent,

      children:[
        {path:'almuerzo', component: ComidaComponent},
        {path: 'historial', component: HistorialComprasComponent},
        {path:'compras', component: ComprasComponent},
        {path:'CambioClave', component: CambioClaveComponent},
        {path: 'inicio', component: InicioComponent},
        {path: 'acerca', component: AcercaNComponent},
        {path: 'delivery', component: DeliveryComponent},
        {path: 'desayuno', component: DesayunoComponent},
        {path: 'postre', component: PostresComponent}
      ]

  },
 
  {path: 'login', component: LoginComponent}
 
    

  ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ComidaComponent,
    NavbarComponent,
    ComprasComponent,
    HistorialComprasComponent,
    CambioClaveComponent,
    InicioComponent,
    AcercaNComponent,
    DeliveryComponent,
    DesayunoComponent,
    PostresComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      appRoutes,
      {enableTracing:true}
 
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
