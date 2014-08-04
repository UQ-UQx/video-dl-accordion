$('.video-dl-accordion').each(function() {
	if (!$(this).hasClass('ui-accordion')) {
		$(this).accordion({
		  collapsible: true,
		  active: false
		});
	}
});