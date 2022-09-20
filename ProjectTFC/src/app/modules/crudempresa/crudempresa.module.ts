import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudempresaRoutingModule } from './crudempresa-routing.module';
import { RegistroempresaComponent } from './pages/registroempresa/registroempresa.component';





@NgModule({
  declarations: [
    RegistroempresaComponent
  ],
  imports: [
    CommonModule,
    CrudempresaRoutingModule,

  
  ],
  exports:[
    RegistroempresaComponent
    ,
   
       
    
  ]

  
})
export class CrudempresaModule { }
