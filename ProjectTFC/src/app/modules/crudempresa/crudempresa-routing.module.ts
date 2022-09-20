import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroempresaComponent } from './pages/registroempresa/registroempresa.component';

import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from "@angular/material/slider";
import { MatButtonModule } from "@angular/material/button";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const routes: Routes = [
{
  path:'',
  component: RegistroempresaComponent,
  
}

];

@NgModule({
  imports: [RouterModule.forChild(routes),
  
  
    MatStepperModule,
        MatSelectModule,
        MatSliderModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonToggleModule,
        MatTooltipModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatIconModule,
        MatDialogModule,
        MatTabsModule,
        FormsModule,
        ReactiveFormsModule,
     
     
  
  
  ],





  exports: [RouterModule,

    MatSliderModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    
  
  
  
  ]
})
export class CrudempresaRoutingModule { }
