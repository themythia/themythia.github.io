$(document).ready(function(){
    $(".search").click(function(){
        var searchTerm = $(".form-control").val() ;
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +  "&limit=10&format=json&callback=?" ;
        $.getJSON(url , function(json){
            $(".result").html("");
            for (var i = json[1].length - 1 ; -1 < i ; i--) {
                $(".result").prepend("<a href='" +json[3][i]+ "' target = '_blank'><li><div id='resultTitle'><strong>" +json[1][i]+ "</strong></div><br><div id='resultDesc'>" +json[2][i]+"</div></li></a>");
            }   
        })        
    })
    $(".form-control").keypress(function(e){
        if(e.which==13){
            $(".search").click();
        }
    });
    $(".random").click(function(){
        var url2 = "https://en.wikipedia.org/wiki/Special:Random" ;
        window.location = url2;
    })
})