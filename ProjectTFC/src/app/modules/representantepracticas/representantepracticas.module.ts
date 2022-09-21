import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepresentantepracticasRoutingModule } from './representantepracticas-routing.module';
import { RegistrotutorComponent } from './pages/registrotutor/registrotutor.component';
import { SharedModule } from '@shared/shared.module';
import { AsignaciontutorComponent } from './pages/asignaciontutor/asignaciontutor.component';

@NgModule({
  declarations: [
    
    RegistrotutorComponent,
         AsignaciontutorComponent,
  ],
  imports: [
    CommonModule,
    RepresentantepracticasRoutingModule,
    SharedModule // se importa el modulo que se va a compartir
  ]
})
export class RepresentantepracticasModule { }
