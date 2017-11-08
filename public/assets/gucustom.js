$(function() {
    if ($("div.gu-ask-us").is("*")) {
        var notKie = (window.location.pathname.match(/\/repositories\/7/) == null);
        if (notKie) {
            //no action
        } else {
            var kie = $("<div class='gu-ask-us'>Please contact the <a href='mailto:bioethics@georgetown.edu'>Bioethics Research Library</a> for assistance with accessing these materials.</div>");
            $("div.gu-ask-us").replaceWith(kie);
        }
    }
    
    $("#sort option[value^='year_sort']")
        .attr("title","A disclaimer about the year sort will go here");
        
    $("div.archival_object + div.identifier").each(function(){
        var text = $(this).find("span.component").text();
        if (/^[0-9]+$/.test(text)) {
            $(this).hide();
        }
    });
});
