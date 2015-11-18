/* your code should go here */
var totcal = 0;
var tmpl =  '<div>'+
            '<img src="IMAGE">'+
            '<h2>NAME</h2>'+
            '<p>CAL calories</p>'+    
            '<button id="NAMEmin" value="CALval">Add</button>'+
            '</div>'; 

$(document).ready(function(){
    Food.populate();
    $( ".food" ).on( "click", "div > button", function() {
        Food.eat(this);
    });

});


Food = {
    eat : function(this_el){
        totcal = totcal + parseInt($(this_el).val());
        $("#total").text(parseInt(totcal));
    },
    
    populate: function(this_el){
    for(var i=0; i<data.length; i++){
 $(".food").append(tmpl.replace("IMAGE",data[i].image).replace("NAME",data[i].name).replace("CAL",data[i].calories).replace("NAMEmin",data[i].name.toLowerCase()).replace("CALval",data[i].calories));
    }
    }
};