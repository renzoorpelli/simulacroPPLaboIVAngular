import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { PaisService } from '../services/pais.service';
import { TablaPaisesComponent } from '../components/utils/tabla-paises/tabla-paises.component';



@NgModule({
  declarations: [
    TablaPaisesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [PaisService],
  exports:[
    TablaPaisesComponent
  ]
})
export class PaisModule { }
