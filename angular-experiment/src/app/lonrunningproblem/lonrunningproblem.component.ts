import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lonrunningproblem',
  templateUrl: './lonrunningproblem.component.html',
  styleUrls: ['./lonrunningproblem.component.css']
})
export class LonrunningproblemComponent implements OnInit {
  public buttonCaption: string = "Long Running Operation";
  constructor() { }

  ngOnInit() {
  }
  public LongRunningOperation(): void {
    this.buttonCaption = "Progressing ....[Wait for 10 seconds]";
    setTimeout(() => {
      let started = new Date();//Started Date
      do {

      } while (((new Date() - started)) <= 10000)
      this.buttonCaption = "Long Running Operation";
      console.log("Counted for 6 seconds");
    }, 100);
  }
}
