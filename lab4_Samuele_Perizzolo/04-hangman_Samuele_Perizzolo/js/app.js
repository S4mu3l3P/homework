/* Hangman file */

$(document).ready(function(){       
     Hangman.start();
    $(".btn-try").click(function(){
         var l = $("#letter").val();
         if(l.length!=1){
             alert("Insert a letter (not a string)");
         }
        else{
         Hangman.processLetter(l);
        }

     });
});

var Hangman = {
  
  WORDS  : ["atterrito", "abietto", "atavico", "affrancare"], 
  
  STATUS_WON : 1,
  STATUS_LOST : -1,
  STATUS_CONTINUE : 0,
  LUN_SEC_WORD : 0,
  TRIALS : 6,
  NUM : 0,
  
  /* the secret word */
  secretWord : null,
  
  /* the secret word */
  maskedWord : null,  
  
  /* number of fails */
  numFails : 0,
  
  /* init a new game */
  start : function() {
    
    // we select some of the words of this.data randomly
    var r = Hangman.rand();
    this.secretWord = [];
    this.secretWord = this.WORDS[r];
    var len = this.secretWord.length;
    Hangman.LUN_SEC_WORD = len;
    this.maskedWord = [];
    for(var i=0; i < len; i++){
      this.maskedWord[i]=" _ ";
        $("#secret-word").append(this.maskedWord[i]);
    }
    
  }, 
  
  processLetter : function(l){
      

    var arr = this.secretWord.split('');
    //alert(arr.multiIndexOf(l));
    //alert(arr);
    var lungh = arr.multiIndexOf(l).length;
    Hangman.LUN_SEC_WORD = Hangman.LUN_SEC_WORD - lungh;
    if(lungh == 0){
        Hangman.TRIALS--;
        Hangman.NUM++;
        $("#letter").val('');
        $(".hman").html('<img src="img/hman-'+Hangman.NUM+'.png">');
        if(Hangman.TRIALS==0){
            $("#letter").remove();
            $(".btn-try").remove();
            $("#result").text("HAI PERSO");
        }
    }
    else{
        for(var i=0;i<lungh;i++){
            //alert(arr.multiIndexOf(l)[i]);
            var p = arr.multiIndexOf(l)[i];
            this.maskedWord[p]=this.secretWord[p];
        }
        $("#secret-word").text('');
        $("#secret-word").append(this.maskedWord);
        $("#letter").val('');
        if(Hangman.LUN_SEC_WORD==0){
            $("#letter").remove();
            $(".btn-try").remove();
            $("#result").text("HAI VINTO"); 
        }
    }
        
  }, 

  checkStatus : function(){
    return;
  },
    
  rand : function(){
    return Math.round(Math.random() * 3 + 0);
  }
  
};

Array.prototype.multiIndexOf = function (el) { 
    var idxs = [];
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === el) {
            idxs.unshift(i);
        }
    }
    return idxs;
};  
