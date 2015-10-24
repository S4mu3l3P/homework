var tmpl = "<li>" + 
               "<div class='preview'> " +
               "    <img class='logo' src='img/package.png'> " +
               "</div>" +
               "<div class='details'>" +
               "  <a>name</a>" +
               "</div>"+
            "</li>";

$( document ).ready(function() {
    
    for(var i=0; i< products.length; i++){  
          var add_to_ul = tmpl.replace("name", products[i].name);
          $(".items").append(add_to_ul);
          add_to_ul = "";
      }
    
     $(".btn-add").click(function(){
         var prod = $("#product").val();
         if(prod != ""){
         var add_to_ul = tmpl.replace("name", prod);
         $(".items").append(add_to_ul);
         add_to_ul = "";
         $("#product").val('');
         }
     });
        
    
    $( ".items" ).on( "click", "li", function(event) {
        var selected = this;
        $(this).css("background-color","#82dbf8");
        $( ".btn-remove" ).on( "click", function(event) {
            $(selected).remove();
            selected = "";
        });      
    }); 

});