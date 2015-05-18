	function hideAll(){
	$('.geschiedenis').hide();
	$('.opvoedingsproject').hide();
	$('.schoolregelement').hide();
	$('.agenda').hide();
	$('.verslagen').hide();
	$('.Sportenspel').hide();
	$('.ster-foto').hide();
	$('.contactformulier').hide();
	$('.info').hide();
	$('.leerkrachten_submenu').hide();
	$('.s1ste_Leerjaar').hide();
	$('.s2de_Leerjaar').hide();
	$('.s3de_Leerjaar').hide();
	$('.s4de_Leerjaar').hide();
	$('.s5de_Leerjaar').hide();
	$('.s6de_Leerjaar').hide();
	$('.Anderstaligen').hide();
	$('.slide_een').hide();
	$('.slide_twee').hide();
	$('.slide_drie').hide();
	}


	 $('.sterTop').hover(function(){
	 	hideAll();
	 $('.geschiedenis').show();
	 $('.opvoedingsproject').show();
	 $('.schoolregelement').show();
	 });

	 $('.sterLinks').hover(function(){
	 	hideAll();
	 $('.s1ste_Leerjaar').show();
	 $('.s2de_Leerjaar').show();
	 $('.s3de_Leerjaar').show();
	 $('.s4de_Leerjaar').show();
	 $('.s5de_Leerjaar').show();
	 $('.s6de_Leerjaar').show();
	 $('.Anderstaligen').show();
	 });

	 $('.sterLinksOnder').hover(function(){
	 	hideAll();
	 $('.agenda').show();
	 $('.verslagen').show();
	 $('.Sportenspel').show();
	 $('.ster-foto').show();
	 });


 	$('.sterRechtsOnder').hover(function(){
	 	hideAll();
	 $('.contactformulier').show();
	 $('.info').show();
	 });

 	$('.sterRechts').hover(function(){
	 	hideAll();
	 $('.leerkrachten_submenu').show();
	 });
	 $(document).ready(hideAll());
	 //dit is voor click;


	 	function hideAll(){
	$('.geschiedenis').hide();
	$('.opvoedingsproject').hide();
	$('.schoolregelement').hide();
	$('.agenda').hide();
	$('.verslagen').hide();
	$('.ster-foto').hide();
	$('.contactformulier').hide();
	$('.info').hide();
	$('.leerkrachten_submenu').hide();
	$('.s1ste_Leerjaar').hide();
	$('.s2de_Leerjaar').hide();
	$('.s3de_Leerjaar').hide();
	$('.s4de_Leerjaar').hide();
	$('.s5de_Leerjaar').hide();
	$('.s6de_Leerjaar').hide();
	$('.Anderstaligen').hide();
	$('.Sportenspel').hide();
	}


	 $('.Stertop').click(function(){
	 	hideAll();
	 $('.geschiedenis').show();
	 $('.opvoedingsproject').show();
	 $('.schoolregelement').show();
	 });

	 $('.sterLinks').click(function(){
	 	hideAll();
	 $('.s1ste_Leerjaar').show();
	 $('.s2de_Leerjaar').show();
	 $('.s3de_Leerjaar').show();
	 $('.s4de_Leerjaar').show();
	 $('.s5de_Leerjaar').show();
	 $('.s6de_Leerjaar').show();
	 $('.Anderstaligen').show();
	 });

	 $('.sterLinksOnder').click(function(){
	 	hideAll();
	 $('.agenda').show();
	 $('.verslagen').show();
	 $('.Sportenspel').show();
	 $('.ster-foto').show();
	 });


 	$('.sterRechtsOnder').click(function(){
	 	hideAll();
	 $('.contactformulier').show();
	 $('.info').show();
	 });

 	$('.sterRechts').click(function(){
	 	hideAll();
	 $('.leerkrachten_submenu').show();
	 });
	 $(document).ready(hideAll());
	


var i = 1;
var slider = function(){
	document.getElementById("slide").src = "images/ster/mainslideshow-" + i + ".png";
	i++;
	if (i >= 4) {i = 1;}
	setTimeout(slider, 3000);
};
slider();