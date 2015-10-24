/* Main Try > file */

$(document).ready(function(){  
    var a,b,c;
    $(".details h1").hide();
    $(".msg-default").show();
    
    $( ".btn-verify" ).click(function() {
        a = parseInt($("#side_a").val());
        b = parseInt($("#side_b").val());
        c = parseInt($("#side_c").val());
        
        if(!TryAngle.isTriangle(a,b,c) && (a > 0 && b > 0 && c > 0) &&($.isNumeric(a) && $.isNumeric(b) && $.isNumeric(c))){
            $(".details h1").hide();
            $(".msg-notriangle").show();
        }
        else if(a < 1 || b < 1 || c < 1  || (!$.isNumeric(a)) ||(!$.isNumeric(b)) || (!$.isNumeric(c))){
            $(".details h1").hide();
            $(".msg-nodata").show();
        }
        else{
            
            if(TryAngle.isScalene(a,b,c)){
              $(".details h1").hide();
              $(".msg-scalene").show(); 
            }
            else if(TryAngle.isIsocele(a,b,c)){
              $(".details h1").hide();
              $(".msg-isosceles").show(); 
              if(TryAngle.isEquilateral(a,b,c)){
                    $(".details h1").hide();
                    $(".msg-equilateral").show();  
                }
            }
        }
    });
});

TryAngle = {

    
    /* Checks if the sides a, b, c belong to a valid rectangle */
    isTriangle : function(a, b, c){        
        return a + b > c && b + c > a && a + c > b;
    },
    
    isScalene : function(a,b,c){        
        return a!=b && a!=c && b!=c;
    },

    isIsocele : function(a, b, c){        
        return a==b || a==c || b==c;
    },

    isEquilateral : function(a, b, c){        
        return a==b && a==c; 
    }
};