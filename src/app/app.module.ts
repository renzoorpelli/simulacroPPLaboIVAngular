import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './utils/nav-bar/nav-bar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { BusquedaComponent } from './utils/busqueda/busqueda.component';
import { PeliculasModule } from './pelicula/peliculas.module';
import { ActorModule } from './actor/actor.module';

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
    ActorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
