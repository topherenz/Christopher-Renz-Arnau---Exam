jQuery( document ).ready(function() {
	jQuery('.header-nav li').click(function() { 
		jQuery(this).toggleClass('cart-active');
	});
});