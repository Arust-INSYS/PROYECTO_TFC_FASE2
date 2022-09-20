import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistruserComponent } from './pages/registruser/registruser.component';

const routes: Routes = [
  {
    path:'',
    component: RegistruserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
