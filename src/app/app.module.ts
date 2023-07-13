import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Servicio carga archivos js

import { CargajsService } from './shared/cargajs.service';
import { PagesModule } from './pages/pages.module';
import { PerfilCorporativoComponent } from './pages/perfil-corporativo/perfil-corporativo.component';
import { GobiernoCorporativoComponent } from './pages/gobierno-corporativo/gobierno-corporativo.component';
import { InformesSostenibilidadComponent } from './pages/informes-sostenibilidad/informes-sostenibilidad.component';
import { InformacionFinancieraComponent } from './pages/informacion-financiera/informacion-financiera.component';
import { InformacionInversionistasComponent } from './pages/informacion-inversionistas/informacion-inversionistas.component';
import { ContactoInversionistasComponent } from './pages/contacto-inversionistas/contacto-inversionistas.component';
import { SharedModule } from "./shared/shared.module";


//Fin servicio archivos js



@NgModule({
    declarations: [
        AppComponent,
        PerfilCorporativoComponent,
        GobiernoCorporativoComponent,
        InformesSostenibilidadComponent,
        InformacionFinancieraComponent,
        InformacionInversionistasComponent,
        ContactoInversionistasComponent
    ],
    providers: [
        CargajsService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        SharedModule
    ]
})
export class AppModule { }
