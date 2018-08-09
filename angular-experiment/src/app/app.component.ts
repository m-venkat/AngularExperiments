

import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // let $: any;
   menus: any = [
    {
      menu: 'Directive',
      routerLink: 'directives'
    },
    {
      menu: 'Bindings',
      routerLink: 'bindings'
    },
    {
      menu: 'Service',
      routerLink: 'directives'
    },
    {
      menu: 'Routing',
      routerLink: 'notready'
    },
    {
      menu: 'Dependency Injection',
      routerLink: 'notready'
    },
    {
      menu: 'Home',
      routerLink: 'home'
    }
  ];

  highlightActiveMenu(event: any): void {
    $('ul li a').removeClass('activeMenu');
    $(event.target).addClass('activeMenu');
  }
}
