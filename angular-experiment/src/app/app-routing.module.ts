
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { BindingsComponent } from './bindings/bindings.component';
import { DirectivesComponent } from './directives/directives.component';
import {HomeComponent } from './home/home.component';
import { NotreadyComponent } from './notready/notready.component';

const appRoutes: Routes = [
  {path: 'bindings', component: BindingsComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'notready', component: NotreadyComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
