/* Main Dicerool file */
var ndices;
$(document).ready(function(){  
        
    $(".table").hide();
     
    $("#btn_start").click(function(event){
        ndices = parseInt($("input[name=ndices]").val());
        if($.isNumeric(ndices) && ndices > 0){
            $(".load_dice").hide(); 
            Dice.change();
            $(".table").show();
        }
        else{
            alert("Insert a number");   
        }
    });
    
    $("#btn_roll").click(function(event){
        $(".dices li").remove();
        Dice.change();
    });
        

});

Dice = {
    roll : function(){
        return Math.round(Math.random() * 5 + 1);
    },
    
    change : function(){
        for(var i=0; i<ndices; i++){
               var templ = '<li id="dice'+i+'"><img src="img/dice-'+Dice.roll()+'.png"></li>';               
            $(".dices").append(templ);
        }
            
    }

};

