// random value generated
  var y = Math.floor(Math.floor() * 10 + 1);
// counting the number of guesses
var Guess = 1;
function submit(){
    localStorage.getItem("number", number)
}
// made for correct Guess
if(x == y)
{

    alert("CONGRATULATIONS!!!" + playername + "YOU GUEESED IT RIGHT IN" + guess + "GUESS");
     guess = 1;

}
else if(x > y)
{
    guess++;
    alert("WHOOPS, PLEASE TRY A SMALLER NUMBER")
}  
else
{
    guess++;
    alert("WHOOPS, PLEASE TRY A GREATER NUMBER")
}
// function for number guessed by user
var x = document.getElementById("guessField").value;

function playAgain() {
    y = Math.floor(Math.random() * 10 + 1);
}

