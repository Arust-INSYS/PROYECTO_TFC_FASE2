import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage', // selector = vamos a utilizar para llamar a un componente dentro del  html
  templateUrl: './homepage.component.html', // es el html asociado al componente
  styleUrls: ['./homepage.component.css']// url del archivo que afecta al componente
})
export class HomepageComponent implements OnInit { // codigo typscripts

  constructor() { }

  ngOnInit(): void {
  }

}
