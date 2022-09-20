import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   mainMenu: {defaultOptions : Array<any> , acceslink:  Array<any>
  }  =  { defaultOptions : [] , acceslink:  []}
  // el menu principal debe cumplir las dos condiciones
   constructor() { }

  ngOnInit(): void { // ciclo de vida de los componentes aqui se hace el llamado de servicios o urls en la cual su objetivo es llenar datos y cvariables  

  this.mainMenu.defaultOptions = [
    {
      name:'Nombre1',
      icon:'',
      router:''
    },
    {
      name:'Nombre2',
      icon:'',
      router:''
    },
  ]

  this.mainMenu.acceslink = [
    {
      name:'Nombre1',
      icon:'',
      router:''
    },
    {
      name:'Nombre2',
      icon:'',
      router:''
    },
  ]



  }

}
