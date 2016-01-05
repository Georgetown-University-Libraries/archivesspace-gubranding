$(function() {
	if ($("div.gu-ask-us").is("*")) {
		var notKie = (window.location.pathname.match(/\/repositories\/7/) == null);
		if (notKie) {
			return;
		}
		
		var kie = $("<div class='gu-ask-us'>Please contact the <a href='mailto:bioethics@georgetown.edu'>Bioethics Research Library</a> for assistance with accessing these materials.</div>");
		$("div.gu-ask-us").replaceWith(kie);
	}
});
