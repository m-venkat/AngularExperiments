import { Event } from "../../node_modules/@angular/router";

addEventListener("message", function(e)  {
  //wait for 10 seconds and post this message 
  let inputNumber: number = e.data;
  setTimeout(() => { 
    postMessage("Square of " + inputNumber + " is " + (inputNumber * inputNumber)
      , undefined);
  }, 10000);
});
