

if($(".resize").width() > $(".resize").height()) { 
 $(this).css('width',MaxPreviewDimension+'px');
 $(this).css('height','auto');
} else {
 $(this).css('height',MaxPreviewDimension+'px');
 $(this).css('width','auto');
}