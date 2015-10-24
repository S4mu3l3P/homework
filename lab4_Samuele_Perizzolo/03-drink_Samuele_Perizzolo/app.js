/* your code should go here */
var alcur=0;
$(document).ready(function(){  
  // you may want to write things here
    $(".nodrink").hide();
    for(var i=0; i<data.length; i++){
        var tmpl = '<div><img src="'+data[i].image+'"><h2>'+data[i].name+'</h2><p>'+data[i].glassML+' ML</p><button id="'+data[i].name.toLocaleLowerCase()+'" value="'+(data[i].glassML*data[i].lavel)+'">Drink</button></div>';
        $(".drinks").append(tmpl);
    }
    
    $(".drinks").on( "click", "button", function() {
        Alchool.drink(this);
    });
    
});


Alchool = {
    drink : function(this_el){
        alcur = alcur + parseInt($(this_el).val());
        $("#alc").text(parseInt(alcur));
        if(alcur>500){
            $(".candrink").hide();
            $(".nodrink").show(); 
        }
    }
};
