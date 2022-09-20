import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroempresaComponent } from '@modules/crudempresa/pages/registroempresa/registroempresa.component';
import { WelcomeEmpresaComponent } from '@modules/Empresa/pages/welcome-empresa/welcome-empresa.component';
import { HomepageComponent } from '@modules/home/pages/homepage/homepage.component';
import { UserloginComponent } from '@modules/login/pages/userlogin/userlogin.component';
import { RegistrotutorComponent } from '@modules/representantepracticas/pages/registrotutor/registrotutor.component';
import { LoginModule } from './modules/login/login.module';

const routes: Routes = [
  {
    path: '' ,// ruta 4200// ruta raiz
    // component =  no se utilioza lazy l;oad 
    component: LoginModule,
    loadChildren:() => import('./modules/login/login.module').then(m => m.LoginModule) // se importa un modulo que tiene routing es decir ruta 
  },
  {
    path: 'home' ,// ruta 4200// ruta raiz
    // component =  no se utilioza lazy l;oad 
    component: HomepageComponent, // carga el homepage que tiene el sheader y fouter
    loadChildren:() => import('./modules/home/home.module').then(m => m.HomeModule) // se importa un modulo que tiene routing es decir ruta 
  },
  {
    path: 'empresa' ,// ruta 4200// ruta raiz
    // component =  no se utilioza lazy l;oad 
    component: WelcomeEmpresaComponent, // carga el homepage que tiene el sheader y fouter
    loadChildren:() => import('./modules/Empresa/empresa.module').then(m => m.EmpresaModule) // se importa un modulo que tiene routing es decir ruta 
  },
  {
    path: 'representantepracticas' ,// ruta 4200// ruta raiz
    // component =  no se utilioza lazy l;oad 
    component: RegistrotutorComponent, // carga el homepage que tiene el sheader y fouter
    loadChildren:() => import('./modules/representantepracticas/representantepracticas.module').then(m => m.RepresentantepracticasModule) // se importa un modulo que tiene routing es decir ruta 
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
