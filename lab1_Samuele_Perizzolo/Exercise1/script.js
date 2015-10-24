var secret = 44;
var guess = null;
var tentativi = 5;

while (guess != secret){
    
    guess = parseInt(prompt('Guess the secret number [0-100]'));
    if(isNaN (guess)){
        alert("Insert a number");
    }
    else{
        if (guess == secret){    
            alert("You won!");
        }
        if (guess < secret){    
            alert("Try a higher number");
        } 
        if (guess > secret){    
            alert("Try a lower number");
        } 
    }
}