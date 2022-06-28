import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('myModalClose') modalClose: any;

  filtro: string = '';

  clientes: any[] = [
    {'id': 1, 'nombres': 'John', 'apellidos': 'Doe', 'email':'jhonDoe@gmail.com','contacto':'3001234567' ,'fechaNacimiento':'1999-06-15','direccion':'Illonois Cr 11 #23', 'cliente':'cliente'},
    {'id': 2, 'nombres': 'Samir', 'apellidos': 'Diaz', 'email':'samirDiaz@gmail.com','contacto':'3201334557' ,'fechaNacimiento':'1999-06-15','direccion':'Dakota Cr 08 #33', 'cliente':'cliente'},
    {'id': 3, 'nombres': 'Camila', 'apellidos': 'Pacheco', 'email':'camilaPacheco@gmail.com','contacto':'3241264703' ,'fechaNacimiento':'1999-06-15','direccion':'Missury Cr 01 #72', 'cliente':'cliente'},
    {'id': 4, 'nombres': 'Luisa', 'apellidos': 'Hernandez', 'email':'luisaHernandez@gmail.com','contacto':'3193221567' ,'fechaNacimiento':'1999-06-15','direccion':'Carolina Cr 09 #32', 'cliente':'cliente'}
  ];

  clienteAEditar: any = {};
  respaldoClientes = this.clientes.filter(() => true);

  datosCliente(data: any){
    data.id = this.clientes.length + 1;
    this.clientes.push(data);
    this.respaldoClientes.push(data);
    this.modalClose.nativeElement.click();
  }

  datosActualizacion(data: any){
    data.id = this.clientes.length + 1;

    this.clientes.forEach(valor => {
      if(valor.id === data.id){
        valor = data;
      }
    });
    this.modalClose.nativeElement.click();
  }

  buscarFiltro(event: any){
    this.filtro = '';
    this.filtro = event.target.value;
    let listaFiltrada: any[] = [];

    if(this.filtro.trim().length !== 0){
      this.respaldoClientes.forEach(valor => {
        if(valor.nombres.includes(this.filtro) || valor.apellidos.includes(this.filtro)){
          listaFiltrada.push(valor);
        }
      });
      this.clientes = listaFiltrada;
    }else{
      this.clientes = this.respaldoClientes;
    }
  }

  borrarContacto(ctcId: string){
    this.clientes.forEach(valor => {
      if(valor.id === ctcId){
        this.clientes = this.clientes.filter((contacto) => contacto != valor);
      }
    });
  }

  contactoAEditar(contacto: any){
    console.log(contacto);
    this.clienteAEditar = contacto;
  }

}
