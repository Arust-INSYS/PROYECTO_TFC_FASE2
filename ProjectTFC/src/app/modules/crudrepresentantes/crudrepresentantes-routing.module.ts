import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrorepresentanteComponent } from './pages/registrorepresentante/registrorepresentante.component';

const routes: Routes = [
  {
    path:'',
    component: RegistrorepresentanteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudrepresentantesRoutingModule { }
