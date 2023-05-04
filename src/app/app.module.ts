import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/utils/nav-bar/nav-bar.component';
import { FooterComponent } from './common/utils/footer/footer.component';
import { BusquedaComponent } from './common/utils/busqueda/busqueda.component';
import { PeliculasModule } from './pelicula/module/peliculas.module';
import { ActorModule } from './actor/module/actor.module';
import { TablaPaisesComponent } from './pais/components/utils/tabla-paises/tabla-paises.component';
import { PaisModule } from './pais/module/pais.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeliculasModule,
    ActorModule,
    PaisModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
