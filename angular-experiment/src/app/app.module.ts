import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, } from '@angular/core';
import { AppComponent } from './app.component';
import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import {HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule } from '@angular/forms';
import { NotreadyComponent } from './notready/notready.component';



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
  ],
  exports: [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
