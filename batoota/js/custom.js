$('.side-bar-opener').click(function(){
	$('.main-banner').addClass('reduced');
});

$('.side-bar-closer').click(function(){
	$('.main-banner').removeClass('reduced');
});

$('.to-input-submit').click(function(){
	$('.input-submit').click();
});