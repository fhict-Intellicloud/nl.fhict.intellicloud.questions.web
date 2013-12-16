// JavaScript Document
function fancyshowhide(){
	$.fancybox({
		maxWidth	: 500,
		maxHeight	: 500,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: 'true',
		closeBtn	: false,
		closeClick	: false,
		openEffect	: 'fade',
		closeEffect	: 'fade',
		content		: $('#data').html(),
		type		: 'inline',
		helpers : {
			overlay : {
				closeClick: false,
				css : {
					'background': 	'rgba(0,0,0,0.4)',
					'text-align':	'center'
				}
			}
		},
		afterLoad: function(){
			setTimeout( function() {
				$.fancybox.close();
			},3000);
		}
	});
	return false;
}