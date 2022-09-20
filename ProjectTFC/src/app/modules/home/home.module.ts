import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [ // solo se importa modulos aqui 
    CommonModule,
    HomeRoutingModule,
    SharedModule // se importa el modulo que se va a compartir
    
    
  ]
})
export class HomeModule { }
