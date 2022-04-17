import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {EjemploService} from '../app/services/ejemplo.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AsyncAngular';
  alumnos:any=[];
  reprobados:any;
  displayedColumns: string[] = ['nombre', 'edad', 'calificacion'];
  constructor(public ejemplo:EjemploService){
   
  }
  ngOnInit(){
    this.alumnos=this.ejemplo.getAlumnos()
    this.allReprobados();
  }
  allReprobados(){
    let count=[];
    this.ejemplo.getReprobados().subscribe(r=>{
      count.push(r)
    })
    this.reprobados=count.length
  }
    
  
}
