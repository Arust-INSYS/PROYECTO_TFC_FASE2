import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BienvenidaRoutingModule } from './bienvenida-routing.module';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';


@NgModule({
  declarations: [
    BienvenidaComponent
  ],
  imports: [
    CommonModule,
    BienvenidaRoutingModule
  ],
  exports:[
    BienvenidaComponent,
  ]
})
export class BienvenidaModule { }
