/* your code should go here */

$( document ).ready(function() {
 
    var tmpl = "";
    for(var i=0; i<8; i++){
        tmpl = tmpl + '<tr class="v'+voli[i].status+'"><td>'+voli[i].airline+'</td><td>'+voli[i].flight+'</td><td>'+voli[i].destination+'</td><td>'+voli[i].departure_time+'</td><td class="'+voli[i].status+'">'+voli[i].status+'</td><td>'+voli[i].gate+'</td></tr>'; 
    }
    
    $("#test").append(tmpl);
    
    
    $("form").on("change", "input", function (event) {
        if($(this).is(':checked')){
             $('.v'+$(this).val()).show();
        }
        else{
            $('.v'+$(this).val()).hide();
        }
    });    

    
});
