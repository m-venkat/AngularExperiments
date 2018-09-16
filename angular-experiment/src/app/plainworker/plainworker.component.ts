import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plainworker',
  templateUrl: './plainworker.component.html',
  styleUrls: ['./plainworker.component.css']
})
export class PlainworkerComponent implements OnInit {
  public buttonCaption: string = "Long Running Operation";
  constructor() { }

  ngOnInit() {
  }
  public  LongRunningOperation() :void
  {
    this.buttonCaption = "Progressing ....[Wait for 10 seconds]";
    setTimeout(() => {
      let started = new Date();//Started Date
      do {

      } while ((new Date() - started) <= 10000)
      this.buttonCaption = "Long Running Operation";
      console.log("Counted for 6 seconds");
    }, 100);
  }
}
