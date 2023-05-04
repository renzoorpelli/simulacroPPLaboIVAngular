import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Actor } from 'src/app/actor/class/actor';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  @Input() title?:string;
  @Input() form:FormGroup;
  @Output() formSubmitted = new EventEmitter<Actor>();

  constructor(private _fb:FormBuilder){

  }

  ngOnInit(): void {
    if(!this.form){
      this.form = this._fb.group({});
    }
  }

  onSubmit(){
    if(this.form.valid){
      this.formSubmitted.emit(this.form.value);
      this.alertaMensajeSucces("Actor Generado con exito!")
    }else{
      this.alertaMensajeError("Error al generar actor Revise Campos!\nEdad:0-100")
    }
  }

  alertaMensajeSucces(mensaje:string):void{
    Swal.fire(
      {
        title: 'Sucess!',
        text: mensaje,
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonAriaLabel: '<a routerLink="actores/listado"></a>'}
    )
   }

   alertaMensajeError(mensaje:string):void{
    Swal.fire({
      title: 'Error!',
      text: mensaje,
      icon: 'error',
      confirmButtonText: 'Aceptar'}
    )
   }
}
