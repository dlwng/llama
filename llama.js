$(document).ready(function(){
	$(function() {
		$( "#accordion" ).accordion({
			collapsible: true
		});
	});
	$('li>a').hover(function() {
		if(!$(this).hasClass('currentTab')) {
			$(this).animate({
				color: jQuery.Color( "rgb(65,67,122)" )}, "fast");
		}
	},
	function() {
		if($(this).hasClass('currentTab')) {
			$(this).removeAttr('style');
		}
		else {
			$(this).animate({ 
				color: jQuery.Color( "rgb(97,158,218)" )}, "fast");
		}
	});
});