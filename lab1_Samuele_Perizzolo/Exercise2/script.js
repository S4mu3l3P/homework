var secret = 44;
var guess = null;
var tentativi = 4;

while (guess != secret && tentativi>=0){
    
    guess = parseInt(prompt('Guess the secret number [0-100]'));
    if(isNaN (guess)){
        alert("Insert a number");
    }
    else{
        if (guess == secret){    
            alert("You won!");
        }
        if (guess < secret){    
            alert("Try a higher number. "+tentativi+" tentativi rimasti");
            tentativi=tentativi-1;
        } 
        if (guess > secret){    
            alert("Try a lower number. "+tentativi+" tentativi rimasti");
            tentativi--;
        } 
    }
  }

 if (guess != secret){
    alert("You have lost!");   
 }