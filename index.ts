//
import {differenceInSeconds} from "date-fns";

//function for count down second
function* countdownTimer (second : number){
    while (second > 0 ) {
        yield second;
        second--
    }

}
let timerIterater = countdownTimer(20 );

function displayCountdown() {
    let result = timerIterater.next();

    if(!result.done){

    const now = new Date();

    const countdownTimer = new Date (now.getTime() + (result.value * 1000));

 const remainingSeconds = differenceInSeconds(countdownTimer , now);

 console.log(`Remaining seconds : ${remainingSeconds}`);

 setTimeout(displayCountdown , 1000);

 } else {
   console.log("Countdown Completed!");
   
 }
}

displayCountdown();




