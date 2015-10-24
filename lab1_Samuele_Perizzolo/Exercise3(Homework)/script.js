/*popolo l'array*/
var list = ["apple", "pear", "peach", "banana", "cherry", "melon", "lemon", "strawberry", "mango", "papaya"];

var tests = 5; /*numero di tentativi*/
var insert = null; /*parola da inserire*/
var punti = 0;
var pos = null; 
while (tests>0){
   insert = prompt('Insert a fruit'); 
   pos = list.indexOf(insert); /*posizione parola inserita. Se la parola non è presente nell'array la funzione restituisce -1*/
   if(pos!=-1){
      punti = punti + 10; 
      list.splice(pos, 1); /*rimuovo la parola inserita (se trovata nell'array) dall'array*/
       alert("Fruit found");
   }
   tests--; /*dopo 5 tentativi esce dal ciclo while*/
    
}

alert("Hai " + punti + "punti");