import { Component, OnInit } from '@angular/core';
import { CargajsService } from '../cargajs.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cargajs: CargajsService
  ) { 
    cargajs.cargararchivosjs(["ocw-header-principal"]);
  }

  ngOnInit(): void {

      
  }

}
