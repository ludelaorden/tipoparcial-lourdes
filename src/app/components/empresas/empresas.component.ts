import { Component, OnInit } from '@angular/core';
import { Empresas } from '../../models/empresa';
import { EmpresasService } from '../../services/empresas.service';


@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  titulo = "Empresas";
  Lista: Empresas[] = [];  /* array del tipo Empresa (la clase) */

  constructor(
    private empresasService: EmpresasService /* servicio Empresas al que voy a consultar */
  ) { }

  ngOnInit() {
    this.getEmpresas();
  }

   getEmpresas(){
      this.empresasService.get().subscribe((res:Empresas[]) => {
      this.Lista = res;
    })
  }

}