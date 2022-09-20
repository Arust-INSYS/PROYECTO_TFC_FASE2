import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { UserloginComponent } from './pages/userlogin/userlogin.component';



@NgModule({
  declarations: [
    UserloginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    
  ],
  exports:[
    UserloginComponent,
  ]
})
export class LoginModule { }
