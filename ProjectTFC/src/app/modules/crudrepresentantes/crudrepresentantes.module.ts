import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudrepresentantesRoutingModule } from './crudrepresentantes-routing.module';
import { RegistrorepresentanteComponent } from './pages/registrorepresentante/registrorepresentante.component';


@NgModule({
  declarations: [
    RegistrorepresentanteComponent
  ],
  imports: [
    CommonModule,
    CrudrepresentantesRoutingModule
  ],
  exports:[
    RegistrorepresentanteComponent
  ]
})
export class CrudrepresentantesModule { }
