{
  document.getElementById('start').onclick = function runScript() {
    var name = prompt("Who is yoooou?");
    var answer;
    var riddle;
    var lifepoints = 3;
    alert("Time to play riddles!");

    var deal = confirm("Remember the deal. If you win we shows you the way out. But if WE wins...we gets " + name + "-hobbit munchings for supper!");
    // IF #1 open
    if (deal === true) {
        answer = prompt("What has roots as nobody sees, Is taller than trees, Up, up it goes, And yet never grows?");
              // IF #2 open
              if (answer.toLowerCase() == "mountain") {

                alert ("No No No No! You got it riiight. You live...for now.");
                  lifepoints +=5;
                  alert ("You gots 5 more lifepoints for that one.");
                  alert ("OK Your turnses!");
                  alert ("You want to ask me a riddle? Go aheads!");

                  riddle = prompt("You want to ask me a fair riddle, type '1', or you want to ask me a cheat riddle, type '2'?");
                   // IF #3 open
                   if (riddle == 1) {
                         alert("You asks me 'Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still.'");
                         alert ("Hmmm...I is THINKING");
                         alert ("Thirty?");
                         alert ("OH! I knows! TEETH.");
                         alert ("I only has seven teeth. You lose 7 points, hee hee.");
                         lifepoints -=7;
                         alert ("Now you has " + lifepoints + " lifepoints.");
                          //If the user confirms, they are asked a riddle.
                          //If they hit 'cancel', the game is called off on account of goblins;
                         deal = confirm("Ready for another one? MY TURN.");
                     // IF #4 open
                     if (deal === true) {
                         answer = prompt ("Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking.");
                      // IF #5 open
                         if (answer.toLowerCase() === "fish") {
                               lifepoints +=5;
                               alert ("NoOOOOOoOoOo! Right again?!?");
                               alert ("You get five more lifepoints, and now you have " + lifepoints + ".");
                               alert ("Nasty " + name + "-hobbit is tricking me.");
                               alert ("OK Your turnses!");
                               alert ("One more riddle! If I guess this one right I gets to eat you!");
                                //Numeric decision-reporting by the user
                               riddle = prompt("You want to ask me a fair riddle, type '1', or you want to ask me a cheat riddle, type '2'?");
                                // IF #6 open
                               if (riddle == 1) {
                                     alert("You asks me 'A box without hinges, key, or lid, Yet golden treasure inside is hid,'");
                                     alert ("Hmmm...no hinges. No lid.");
                                     alert ("Golden treasure...");
                                     alert ("Oh Oh Oh! EGGSES! I used to snick them by the river! mmmmmmm eggses...");
                                     lifepoints -= 7;
                                     alert ("You lose 7 lifepoints!");
                                     alert ("Now you have " + lifepoints + " lifepoints!");
                                     alert ("eeHEEHEEHEE now I gets to eats you, " + name +"-hobbit!");
                                     alert ("Nom Nom Nom Nom Tasty" + name + "s.");
                                 }
                                 // IF #6 close, ELSE #6A open
                                 else if (riddle == 2) {
                                     alert("You asks me 'What have I got in my pocket?'");
                                     alert ("Handses!");
                                     alert ("No....Lint?");
                                     alert ("Nothing?");
                                     alert ("Wait. " + name + ", what HAS you got in your pockets?");
                                     alert ("The RING? My PRESCIOUssssS!!!!");
                                     alert ("You lose eleventybillion points!");
                                     lifepoints = lifepoints - 11000000000;
                                     alert ("Now you only has " + lifepoints + " lifepoints and I will GETS IT BACK");

                                //ELSE #6A close, ELSE #6B open
                                //If user enters an option that is not 1 or 2 on second riddle
                                 }
                                 else {
                                     alert("You's not playing fair!!!");
                                     alert ("I is going to eat you now!");
                                 }
                                 //ELSE #6B close, IF #5 close, ELSE #5 open
                        //If user guesses wrong on second riddle
                        }
                        else {
                            alert ("eeHEEHEEHEE now I gets to eats you, " + name +"-hobbit!");
                            lifepoints = lifepoints - 7;
                            alert ("You lose 7 lifepoints. Now you only has " + lifepoints + ".");
                            alert ("Nom Nom Nom Nom Tasty " + name + "s.");
                        }
                        //ELSE #5 close, IF #4 close, ELSE #4 open
                   }else{
                     alert ("Shhhh...Goblinses are coming! Hide!");
                     //ELSE #4 close
                   }
              }
                        // IF #3 close, ELSE #3A open

                   else if (riddle == 2) {
                     alert("You asks me 'What have I got in my pocket?'");
                     alert ("Handses!");
                     alert ("No....Lint?");
                     alert ("Nothing?");
                     alert ("Wait. " + name + ", what HAS you got in your pockets?");
                     alert ("The RING? My PRESCIOUssssS!!!!");
                     alert ("You lose eleventybillion points!");
                     lifepoints = lifepoints - 11000000000;
                     alert ("Now you only has " + lifepoints + " lifepoints and I will GETS IT BACK");
                }
                //ELSE #3A close, ELSE #3B open
               else {
                   alert("You's not playing fair!!!");
                   alert ("I is going to eat you now!");
               }
                //ELSE #3B close, IF #2 close, ELSE #2 open
          } else {
                  alert ("eeHEEHEEHEE now I gets to eats you, " + name +"ses!");
                  alert ("It's the Mountain, silly!");
                  alert ("You lose 5 lifepoints. And you only started with 3!");
                  lifepoints = lifepoints -5;
                  alert ("You only gots " + lifepoints + " lifepoints.");
                  alert ("Nom Nom Nom Nom Tasty" + name + "s.");

                 }
                //ELSE #2 close, IF #1 close, ELSE #1 open
    } else {
          alert ("WE MADE A DEAAAAAAAAAL! NOooooooooooOOOoOo! Tricksy hobbits -- we HATES them.");
    }
    //ELSE #1 close
  }
}





