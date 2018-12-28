import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { NotreadyComponent } from './notready/notready.component';
import { PlainworkerComponent } from './plainworker/plainworker.component';
import { AppRoutingModule } from './/app-routing.module';

import { LonrunningproblemComponent } from './lonrunningproblem/lonrunningproblem.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    BindingsComponent,
    DirectivesComponent,
    HomeComponent,
    NotreadyComponent,
    PlainworkerComponent,
    LonrunningproblemComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
