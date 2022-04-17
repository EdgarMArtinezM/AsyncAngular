import { Injectable } from '@angular/core';
import { from, observable, Observable } from 'rxjs';
import {filter, map} from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class EjemploService {
  observerAlumnos$:Observable<any>;
  alumnos=[
    {nombre:"Edgar",edad:23,calificacion:true},
    {nombre:"Sandy",edad:23,calificacion:true},
    {nombre:"Angel",edad:12,calificacion:false},
    {nombre:"Pepe",edad:12,calificacion:false},
    {nombre:"Juan",edad:12,calificacion:false}
  ]
  constructor() {
    
    this.observerAlumnos$= new Observable(subs=>{
      subs.next(this.alumnos)
    })
  }

  getAlumnos(){
    return this.observerAlumnos$
  }
  getReprobados(){
    let source=from(this.alumnos).pipe(
      filter(r=>r.calificacion==false)
    )
    return source;
  }
}
