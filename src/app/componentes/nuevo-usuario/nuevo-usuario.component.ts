import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.scss']
})
export class NuevoUsuarioComponent {

  nombres: string = '';
  apellidos: string = '';
  email: string = '';
  fechaNacimiento: any;
  contacto: string = '';
  direccion: string = '';
  cliente: string = '';

  @Output() parentFunction:EventEmitter<any> = new EventEmitter();

  obtenerNombres(event: any){
    this.nombres = event.target.value;
  }

  obtenerApellidos(event: any){
    this.apellidos = event.target.value;
  }

  obtenerEmail(event: any){
    this.email = event.target.value;
  }

  obtenerFechaNacimiento(event: any){
    this.fechaNacimiento = event.target.value;
  }

  obtenerContacto(event: any){
    this.contacto = event.target.value;
  }

  obtenerDireccion(event: any){
    this.direccion = event.target.value;
  }

  obtenerCliente(event: any){
    this.cliente = event.target.value;
  }

  crearCliente(){
    let datosCliente = {
      'id': 0,
      'nombres': this.nombres,
      'apellidos': this.apellidos,
      'email': this.email,
      'fechaNacimiento': this.fechaNacimiento,
      'contacto': this.contacto,
      'direccion': this.direccion,
      'cliente': this.cliente
    }
    this.parentFunction.emit(datosCliente);
  }

}
