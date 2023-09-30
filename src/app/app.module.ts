import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { PotenciaComponent } from './operaciones/potencia/potencia.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CinepolisComponent } from './ticket/cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    PotenciaComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
