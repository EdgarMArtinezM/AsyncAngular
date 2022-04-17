import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploService } from './services/ejemplo.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import { CalificacionPipe } from './calificacion.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CalificacionPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [EjemploService],
  bootstrap: [AppComponent]
})
export class AppModule { }
