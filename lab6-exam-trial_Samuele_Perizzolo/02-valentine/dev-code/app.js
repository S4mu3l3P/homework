/* your code should go here */
var tmpl =  '<li>' +
            '<img src="IMAGE">' +
            '<h2>MESSAGE</h2>' +
            '<button class="opt-choose"'+
            'value="ID">Choose</button>' +  
            '</li>';

var msg =   '<div class="picture">'+
            '<img src="img/IMAGE.jpg">'+
            '</div>'+
            '<div class="message">'+
            '<h2>Dear <span id="cardTo">MSGTO,</span><h2>'+
            '<p id="cardMsg">MSGTEXT</p>'+
            '<p id="cardFrom">MSGFROM</p>';
            '</div>';
$(document).ready(function(){
    
    for(var i=0; i<data.length;i++){
        $(".themes").append(tmpl.replace("IMAGE",data[i].img).replace("ID",data[i].id).replace("MESSAGE",data[i].name));
    }   
  
    $(".themes").on( "click", "li .opt-choose", function() {
        if(!$("#inputFrom").val() || !$("#inputTo").val() || !$("#inputMsg").val()){
            alert("Please enter value");
        }
        else{       
                $(".opt-choose").css("background-color","white");
                $(this).css("background-color","#0066CC");
                $("#preview").removeClass("hidden");              $(".card").html(msg.replace("IMAGE",$(this).val()).replace("MSGTO",$("#inputTo").val()).replace("MSGTEXT",$("#inputMsg").val()).replace("MSGFROM",$("#inputFrom").val()));  
        }
    });
    
    
});







