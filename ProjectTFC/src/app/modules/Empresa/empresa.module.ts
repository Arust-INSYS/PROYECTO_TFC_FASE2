import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { WelcomeEmpresaComponent } from './pages/welcome-empresa/welcome-empresa.component';
import { share } from 'rxjs';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    WelcomeEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule,
    SharedModule
  ]
})
export class EmpresaModule { }
