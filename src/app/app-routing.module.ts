import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { ContactoInversionistasComponent } from './pages/contacto-inversionistas/contacto-inversionistas.component';
import { GobiernoCorporativoComponent } from './pages/gobierno-corporativo/gobierno-corporativo.component';
import { InformacionFinancieraComponent } from './pages/informacion-financiera/informacion-financiera.component';
import { InformacionInversionistasComponent } from './pages/informacion-inversionistas/informacion-inversionistas.component';
import { InversionistasComponent } from './pages/inversionistas/inversionistas.component';
import { PerfilCorporativoComponent } from './pages/perfil-corporativo/perfil-corporativo.component';
import { InformesSostenibilidadComponent } from './pages/informes-sostenibilidad/informes-sostenibilidad.component';



const routes: Routes = [
  { path: 'ContactoInversionistas', component: ContactoInversionistasComponent },
  { path: 'InformacionFinanciera', component: InformacionFinancieraComponent },
  { path: 'InformacionInversionistas', component: InformacionInversionistasComponent },
  { path: 'Inversionistas', component: InversionistasComponent },
  { path: 'PerfilCorporativo', component: PerfilCorporativoComponent },
  { path: 'GobiernoCorporativo', component: GobiernoCorporativoComponent },
  { path: 'InformesSostenibilidad', component: InformesSostenibilidadComponent },

 
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }