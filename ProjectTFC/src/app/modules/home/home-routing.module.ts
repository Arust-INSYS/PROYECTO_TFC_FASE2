import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  //modulos de la zona amarilla en la cual no va a destruir los demas comoponentes 
  {
    path:"homepage",
    //loadChildren:() => import("@modules/bienvenida/bienvenida.module").then(m => m.BienvenidaModule)
    component:HomepageComponent
  },
  {
    path:'auth',
    loadChildren:()=> import('@modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path:'register',
    loadChildren:()=> import('@modules/register/register.module').then(m => m.RegisterModule)
  },
  
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
