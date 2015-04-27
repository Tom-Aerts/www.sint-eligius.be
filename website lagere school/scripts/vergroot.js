
/* Dit zorgt ervoor dat de fotos op de polaroids vergroot worden */
$(".polaroid").click(function(){
$(this).children(".fotopolaroid").toggleClass("foto-big")
$(this).find(".littlepic").toggleClass("bigpic")
});

