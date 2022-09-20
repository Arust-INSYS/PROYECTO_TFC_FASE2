import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezeraComponent } from './components/cabezera/cabezera.component';
import { RouterModule } from '@angular/router';
import { PieComponent } from './components/pie/pie.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarEmpresaComponent } from './components/sidebar-empresa/sidebar-empresa.component';
import { SidebarCordinadorvinComponent } from './components/sidebar-cordinadorvin/sidebar-cordinadorvin.component';
import { SidebarTutorAcademicoComponent } from './components/sidebar-tutor-academico/sidebar-tutor-academico.component';
import { SidebarTutorEstudianteComponent } from './components/sidebar-tutor-estudiante/sidebar-tutor-estudiante.component';



@NgModule({
  declarations: [
    CabezeraComponent,
    PieComponent,
    SidebarComponent,
    SidebarEmpresaComponent,
    SidebarCordinadorvinComponent,
    SidebarTutorAcademicoComponent,
    SidebarTutorEstudianteComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[ // utilizo las exportaciones de componentes en este modulo para que se pueda utilizar en otros modulos 
    CabezeraComponent,
    PieComponent,
    SidebarComponent
  ]
  
})
export class SharedModule { }
