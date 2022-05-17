// counting cards, when you see a low card, the card goes up, when you see a middle card
 // the card stays the same, when you see a high card it comes down. when the card is positive the 
 //  player should bet high, when it is negative the player should bet low.
 // we are going to use a switch statement.

 var count = 2;
 function cc(card) {
     switch(card){
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
             count++;
             break;
        case 10:
        case "J":
        case "Q":
        case "k":
        case "A":
            count --;
            break;
     }
     var holdbet = "Hold";
     if (count > 2){
         holdbet = "Bet";
     }
     return count + " " + holdbet
 }
 console.log(cc("A"));