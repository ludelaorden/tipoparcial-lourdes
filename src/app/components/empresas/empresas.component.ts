import { Component, OnInit } from '@angular/core';
import { Empresas } from '../../models/empresa';
import { EmpresasService } from '../../services/empresas.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDialogService } from "../../services/modal-dialog.service";


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  titulo = "Empresas";
  Lista: Empresas[] = [];  /* array del tipo Empresa (la clase) */

   TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)"
  };
  AccionABMC = "L"; /* inicialmente en el listado de articulos */

  Mensajes = {
  SD: " No se encontraron registros...",
  RD: " Revisar los datos ingresados..."
  };

  FormFiltro: FormGroup;
  FormReg: FormGroup;
  submitted = false;


  constructor(
    private empresasService: EmpresasService, /* servicio Empresas al que voy a consultar */
    public formBuilder: FormBuilder,
    private modalDialogService: ModalDialogService
  ) { }

  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas(){
      this.empresasService.get().subscribe((res:Empresas[]) => {
      this.Lista = res;
    })
  }

  Agregar() {
 this.AccionABMC = "A";
 }

}