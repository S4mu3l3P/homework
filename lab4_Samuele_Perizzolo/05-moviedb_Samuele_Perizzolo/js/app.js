var tmpl = '';

$(document).ready(function () {
  
    // The OMDB service allows calls for any origin via resource sharing:
    // https://en.wikipedia.org/wiki/Same-origin_policy#Cross-Origin_Resource_Sharing
    // so we don't need to provide a JSONP callback
    // http://www.omdbapi.com/?s=<keyword to search>
    // there are more parameters as documented here: http://omdbapi.com
      
    var word ='';
    
  $( "#btnsubmit" ).click(function() {
    $(".row.movies").html('');
    word = ($("#txtsrc").val());
    var linktosite = 'http://www.omdbapi.com/?s='+word+'';
    $.getJSON(linktosite, function(json){      
      console.log("we process the output");
        for(var i=0; i<json.Search.length; i++){
            
    tmpl = '<div class="customblocks"> ' +
    '      <div class="customtitle"> ' +
    '        <h2>'+json.Search[i].Title+'</h2> ' +
    '      </div> ' +
    '      <img src="'+ json.Search[i].Poster +'">'+
    '        <p> ' +
    '        <a href="http://www.imdb.com/title/'+json.Search[i].imdbID+'" class="btn btn-primary" role="button">Details</a> ' +
    '        </p> ' +    
    '  </div>  ' 
            
     $(".row.movies").append(tmpl);       
               
        }
        /*$(".row.movies").append(tmpl2);*/
        
         
    })
    .done(function() {
      console.log( "second success" );
    })
    .fail(function() {
      console.log( "error" );
    })
    .always(function() {
      console.log( "complete" );
    });

    console.log("normal stuff");
  });
   
    
});

