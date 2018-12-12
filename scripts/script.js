// JavaScript Document

$(document).ready(function(){

		console.log('jQuery er der!');
		//$('#knap').click(klik); 
		//var msg = $('#resultat');
		$('.scroll').click(function(){
			$(window).scrollTo(this.hash, 1000);
		});
	});