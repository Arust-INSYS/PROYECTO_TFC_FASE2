import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutoracademicoRoutingModule } from './tutoracademico-routing.module';
import { Anexo1Component } from './pages/anexo1/anexo1.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    Anexo1Component
  ],
  imports: [
    CommonModule,
    TutoracademicoRoutingModule,
    SharedModule // se importa el modulo que se va a compartir
  ]
})
export class TutoracademicoModule { }
