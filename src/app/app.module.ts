import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import {FormsModule} from '@angular/forms';
import { FromListComponent } from './components/from-list/from-list.component'
@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    FromListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
