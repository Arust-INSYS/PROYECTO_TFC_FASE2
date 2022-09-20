import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegistruserComponent } from './pages/registruser/registruser.component';


@NgModule({
  declarations: [
    RegistruserComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ],
  exports: [
    RegistruserComponent
  ]
})
export class RegisterModule { }
