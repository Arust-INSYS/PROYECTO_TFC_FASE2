import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantepracticasRoutingModule } from './estudiantepracticas-routing.module';
import { Anexo2Component } from './pages/anexo2/anexo2.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    Anexo2Component
  ],
  imports: [
    CommonModule,
    EstudiantepracticasRoutingModule,
    SharedModule // se importa el modulo que se va a compartir
  ]
})
export class EstudiantepracticasModule { }
