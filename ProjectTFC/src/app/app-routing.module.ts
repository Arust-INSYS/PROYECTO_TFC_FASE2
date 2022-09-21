import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroempresaComponent } from '@modules/crudempresa/pages/registroempresa/registroempresa.component';
import { WelcomeEmpresaComponent } from '@modules/Empresa/pages/welcome-empresa/welcome-empresa.component';
import { Anexo2Component } from '@modules/estudiantepracticas/pages/anexo2/anexo2.component';
import { HomepageComponent } from '@modules/home/pages/homepage/homepage.component';
import { UserloginComponent } from '@modules/login/pages/userlogin/userlogin.component';
import { AsignaciontutorComponent } from '@modules/representantepracticas/pages/asignaciontutor/asignaciontutor.component';
import { RegistrotutorComponent } from '@modules/representantepracticas/pages/registrotutor/registrotutor.component';
import { Anexo1Component } from '@modules/tutoracademico/pages/anexo1/anexo1.component';
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
  ,
  {
    path: 'asignaciontutor' ,// ruta 4200// ruta raiz
    // component =  no se utilioza lazy l;oad 
    component: AsignaciontutorComponent, // carga el homepage que tiene el sheader y fouter
    loadChildren:() => import('./modules/representantepracticas/representantepracticas.module').then(m => m.RepresentantepracticasModule) // se importa un modulo que tiene routing es decir ruta 
  }
  ,
  {
    path: 'estudiantepracticas' ,// ruta 4200// ruta raiz
    // component =  no se utilioza lazy l;oad 
    component: Anexo2Component, // carga el homepage que tiene el sheader y fouter
    loadChildren:() => import('./modules/estudiantepracticas/estudiantepracticas.module').then(m => m.EstudiantepracticasModule) // se importa un modulo que tiene routing es decir ruta 
  },
  {
    path: 'tutoracademico' ,// ruta 4200// ruta raiz
    // component =  no se utilioza lazy l;oad 
    component: Anexo1Component, // carga el homepage que tiene el sheader y fouter
    loadChildren:() => import('./modules/tutoracademico/tutoracademico.module').then(m => m.TutoracademicoModule) // se importa un modulo que tiene routing es decir ruta 
  }


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
