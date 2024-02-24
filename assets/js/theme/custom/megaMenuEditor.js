import megaMenuFunction from './megaMenuFunction';
    window.megaMenuFunction = megaMenuFunction;

export default function (context) {
	var settings = context.themeSettings;

	if (settings.customMegamenuType == 'Editor') {
	    var megaMenuFunction = new window.megaMenuFunction();
	    const urlStoreHash = $('.custom-global-block').data('store-hash-image');

	    var mega_menu_style1_item = parseInt(settings.mega_menu_style1_item),
	        mega_menu_style2_item = parseInt(settings.mega_menu_style2_item),
	        mega_menu_style3_item = parseInt(settings.mega_menu_style3_item);

	    function SetItemMegaMenu(){
	        $('.navPages-list-megamenu > li:not(.navPages-item-toggle)').mouseover(event => {
	            var numberItem = $(event.currentTarget).index() + 1;

	            if (!$(event.currentTarget).hasClass('has-megamenu')) {
	                LoadMegaMenu(numberItem);
	            }
	        });

	        $(document).on('click','#custom-menu-mobile .navPages-list:not(.navPages-list--user) > li > .navPages-action' , event => {
	            var numberItem = $(event.currentTarget).parent().index() + 1;

	            if (!$(event.currentTarget).parent().hasClass('has-megamenu')) {
	                LoadMegaMenu(numberItem);

                    console.log("load mega menu");
	            }
	        });
	    }
	        
	    function LoadMegaMenu(numberItem){
			let mega_menu_style1_img1 = '',
				mega_menu_style1_img2 = '',
				mega_menu_style1_img3 = '',
				mega_menu_style1_img4 = '',
				mega_menu_style1_img5 = '',
				mega_menu_style1_bottom = '',
				mega_menu_style2_img = '',
				mega_menu_style2_products = '',
				mega_menu_style3_img1 = '',
				mega_menu_style3_img2 = '',
				mega_menu_style3_img3 = '',
				mega_menu_style3_img4 = '',
				mega_menu_style3_img5 = '',
				mega_menu_style3_img6 = '',
				mega_menu_style3_img7 = '',
				mega_menu_style3_img8 = '',
				mega_menu_style3_img9 = '',
				mega_menu_style3_img10 = '',
				mega_menu_style3_bottom = '';

			if (settings.mega_menu_style1_img1 != '') {
				mega_menu_style1_img1 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style1_link1+'" aria-label="'+settings.mega_menu_style1_img1+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style1_img1+'" alt="'+settings.mega_menu_style1_img1+'"/>\
				</a>'
			}

			if (settings.mega_menu_style1_img2 != '') {
				mega_menu_style1_img2 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style1_link2+'" aria-label="'+settings.mega_menu_style1_img2+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style1_img2+'" alt="'+settings.mega_menu_style1_img2+'"/>\
				</a>'
			}

			if (settings.mega_menu_style1_img3 != '') {
				mega_menu_style1_img3 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style1_link3+'" aria-label="'+settings.mega_menu_style1_img3+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style1_img3+'" alt="'+settings.mega_menu_style1_img3+'"/>\
				</a>'
			}

			if (settings.mega_menu_style1_img4 != '') {
				mega_menu_style1_img4 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style1_link4+'" aria-label="'+settings.mega_menu_style1_img4+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style1_img4+'" alt="'+settings.mega_menu_style1_img4+'"/>\
				</a>'
			}

			if (settings.mega_menu_style1_img5 != '') {
				mega_menu_style1_img5 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style1_link5+'" aria-label="'+settings.mega_menu_style1_img5+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style1_img5+'" alt="'+settings.mega_menu_style1_img5+'"/>\
				</a>'
			}

			if (settings.mega_menu_style1_bottom != '') {
				mega_menu_style1_bottom = 
				'<div class="container">'+settings.mega_menu_style1_bottom+'</div>'
			}

			if (settings.mega_menu_style2_img != '') {
				mega_menu_style2_img = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style2_link+'" aria-label="'+settings.mega_menu_style2_img+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style2_img+'" alt="'+settings.mega_menu_style2_img+'"/>\
				</a>'
			}

			if (settings.mega_menu_style2_prodTitle != '' && settings.mega_menu_style2_prodID != '') {
				mega_menu_style2_products = '<h3 class="megamenu-title">'+settings.mega_menu_style2_prodTitle+'</h3><div class="megamenu-slider"></div>'
			}

			if (settings.mega_menu_style3_img1 != '') {
				mega_menu_style3_img1 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link1+'" aria-label="'+settings.mega_menu_style3_img1+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img1+'" alt="'+settings.mega_menu_style3_img1+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img2 != '') {
				mega_menu_style3_img2 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link2+'" aria-label="'+settings.mega_menu_style3_img2+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img2+'" alt="'+settings.mega_menu_style3_img2+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img3 != '') {
				mega_menu_style3_img3 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link3+'" aria-label="'+settings.mega_menu_style3_img3+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img3+'" alt="'+settings.mega_menu_style3_img3+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img4 != '') {
				mega_menu_style3_img4 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link4+'" aria-label="'+settings.mega_menu_style3_img4+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img4+'" alt="'+settings.mega_menu_style3_img4+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img5 != '') {
				mega_menu_style3_img5 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link5+'" aria-label="'+settings.mega_menu_style3_img5+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img5+'" alt="'+settings.mega_menu_style3_img5+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img6 != '') {
				mega_menu_style3_img6 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link6+'" aria-label="'+settings.mega_menu_style3_img6+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img6+'" alt="'+settings.mega_menu_style3_img6+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img7 != '') {
				mega_menu_style3_img7 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link7+'" aria-label="'+settings.mega_menu_style3_img7+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img7+'" alt="'+settings.mega_menu_style3_img7+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img8 != '') {
				mega_menu_style3_img8 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link8+'" aria-label="'+settings.mega_menu_style3_img8+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img8+'" alt="'+settings.mega_menu_style3_img8+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img9 != '') {
				mega_menu_style3_img9 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link9+'" aria-label="'+settings.mega_menu_style3_img9+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img9+'" alt="'+settings.mega_menu_style3_img9+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img10 != '') {
				mega_menu_style3_img10 = 
				'<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_link10+'" aria-label="'+settings.mega_menu_style3_img10+'">\
					<img src="'+urlStoreHash+settings.mega_menu_style3_img10+'" alt="'+settings.mega_menu_style3_img10+'"/>\
				</a>'
			}

			if (settings.mega_menu_style3_img6 != '' || settings.mega_menu_style3_img7 != '' || settings.mega_menu_style3_img8 != '' || settings.mega_menu_style3_img9 != '' || settings.mega_menu_style3_img10 != '') {
				mega_menu_style3_bottom = 
				'<div class="container brand-image custom-fadeInLeft" data-step-animate="0">\
					'+mega_menu_style3_img6+'\
					'+mega_menu_style3_img7+'\
					'+mega_menu_style3_img8+'\
					'+mega_menu_style3_img9+'\
					'+mega_menu_style3_img10+'\
					<a class="image banner-effect-slidebg" href="'+settings.mega_menu_style3_textLink+'" aria-label="'+settings.mega_menu_style3_text+'">\
						<span>'+settings.mega_menu_style3_text+'</span>\
					</a>\
				</div>'
			}

	        if (mega_menu_style1_item == numberItem) {
	            megaMenuFunction.menuItem(mega_menu_style1_item).setMegaMenu({
	                style: 'style 1',
	                imageAreaWidth: settings.mega_menu_style1_imgWidth,
	                cateAreaWidth: settings.mega_menu_style1_cateWidth,
	                cateColumns: settings.mega_menu_style1_col,
					imagesTop: [
						mega_menu_style1_img1,
						mega_menu_style1_img2,
						mega_menu_style1_img3,
						mega_menu_style1_img4,
						mega_menu_style1_img5
					],
					bottomMegamenu: mega_menu_style1_bottom
	            });
	        } else if (mega_menu_style2_item == numberItem){
	            megaMenuFunction.menuItem(mega_menu_style2_item).setMegaMenu({
	                style: 'style 2',
	                imageAreaWidth: settings.mega_menu_style2_imgWidth,
	                cateAreaWidth: settings.mega_menu_style2_cateWidth,
	                cateColumns: settings.mega_menu_style2_col,
					productId: settings.mega_menu_style2_prodID,
					products: mega_menu_style2_products,
					imagesRight: mega_menu_style2_img
	            });
	        } else if (mega_menu_style3_item == numberItem){
	            megaMenuFunction.menuItem(mega_menu_style3_item).setMegaMenu({
	                style: 'style 3',
	                imageAreaWidth: settings.mega_menu_style3_imgWidth,
	                cateAreaWidth: settings.mega_menu_style3_cateWidth,
	                cateColumns: settings.mega_menu_style3_col,
					imagesRight: 
						''+mega_menu_style3_img1+'\
						'+mega_menu_style3_img2+'\
						'+mega_menu_style3_img3+'\
						'+mega_menu_style3_img4+'\
						'+mega_menu_style3_img5+'',
					bottomMegamenu: mega_menu_style3_bottom
	            });
	        } else {
	            return;
	        }
	    }

	    function megaMenuLabel(){
	        if (settings.mega_menu_new_label && settings.mega_menu_new_label_text) {
	            megaMenuFunction.menuItem(settings.mega_menu_new_label).setMegaMenu({
	                label: settings.mega_menu_new_label_text,
	                labelType: 'new',
	                disabled: true
	            });
	        }

	        if (settings.mega_menu_hot_label && settings.mega_menu_hot_label_text) {
	            megaMenuFunction.menuItem(settings.mega_menu_hot_label).setMegaMenu({
	                label: settings.mega_menu_hot_label_text,
	                labelType: 'hot',
	                disabled: true
	            });
	        }

	        if (settings.mega_menu_sale_label && settings.mega_menu_sale_label_text) {
	            megaMenuFunction.menuItem(settings.mega_menu_sale_label).setMegaMenu({
	                label: settings.mega_menu_sale_label_text,
	                labelType: 'sale',
	                disabled: true
	            });
	        }
	    }

	    megaMenuLabel();

	    var setItemMegaMenu = SetItemMegaMenu();

	    window.onload = setItemMegaMenu;
	}
}
