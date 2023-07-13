
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InversionistasComponent } from './inversionistas/inversionistas.component';
import { PerfilCorporativoComponent } from './perfil-corporativo/perfil-corporativo.component';
import { ContactoInversionistasComponent } from './contacto-inversionistas/contacto-inversionistas.component';
import { GobiernoCorporativoComponent } from './gobierno-corporativo/gobierno-corporativo.component';
import { InformacionFinancieraComponent } from './informacion-financiera/informacion-financiera.component';
import { InformacionInversionistasComponent } from './informacion-inversionistas/informacion-inversionistas.component';
import { InformesSostenibilidadComponent } from './informes-sostenibilidad/informes-sostenibilidad.component';




const childRoutes: Routes = [
  { path: '', component: PerfilCorporativoComponent, data: { titulo: 'PerfilCorporativo' } },
  { path: '', component: InversionistasComponent, data: { titulo: 'Inversionistas' } },
  { path: '', component: ContactoInversionistasComponent, data: { titulo: 'ContactoInversionistas' } },
  { path: '', component: GobiernoCorporativoComponent, data: { titulo: 'GobiernoCorporativo' } },
  { path: '', component: InformacionFinancieraComponent, data: { titulo: 'InformacionFinanciera' } },
  { path: '', component: InformacionInversionistasComponent, data: { titulo: 'InformacionInversionistas' } },
  { path: '', component: InformesSostenibilidadComponent, data: { titulo: 'InformesSostenibilidad' } }

]


@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
