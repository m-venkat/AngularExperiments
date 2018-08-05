import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  simpleString = 'This is string literal';
  oneWayBindingExampleHtml = '<input type="text" [value]="complexObj.name">';
  oneWayViewToData = '<input type="text" (input)=\'complexObj.name = $event.target.value\'>';
  twowaySyntax1 = '<input type="text" [value]="complexObj.name" (input)=\'complexObj.name = $event.target.value\'>';
  twowaySyntax2 = '<input type="text" [(ngModel)]="complexObj.name" ></input>';

  complexObj = {
    name: 'Venkat',
    sex: 'Male',
    Address : {
      StreetNum: 2,
      StreetName: '2/43 Ruby Place',
      Suburb: 'Werribee'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
