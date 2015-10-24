/* Main Try > file */

$(document).ready(function(){  
        
   /*  Converts the input side identified by *name* 
    *  into a floating number
    *   returns value: if the side is valid
    *   returns null: if the side is not valid
    */
    inputSideToNumber = function(name){
        var val = $("input[name="+ name +"]").val();
        var side = parseFloat(val);
        
        if (isNaN(side) || side <=0 ){
            $("label[for="+ name +"]").addClass("error");
            return null;
        }
        
        return side;
    };
    
    /* Resets the content and style of the form */  
    var clearForm = function() {
        $("label").removeClass("error");
        $(".results .details h1").html("");                        
    };
    
  
    $(".btn-verify").click(function(event){
        
        clearForm();
        
        var a = inputSideToNumber("side_a");
        var b = inputSideToNumber("side_b");
        var c = inputSideToNumber("side_c");

        // Let's verify the input
        if (a == null || b == null|| c == null){
            $(".results .details h1").html("I don't understand. Are those numbers?");            
            return;
        } 
        
        if (TryAngle.isTriangle(a,b,c)){
            var type = TryAngle.getTypeBySidesLength(a, b, c);
            $(".results .details h1").html("That's certainly a triangle!<br>" +
                                          "In fact, it is a <em>{0}</em> triangle".replace("{0}", type));            
        } else {            
            $(".results .details h1").html("Well, Euclid tells me that's not a triangle.");                        
        }
        
    });
        
});