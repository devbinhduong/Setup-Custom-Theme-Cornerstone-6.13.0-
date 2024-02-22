import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.dropdown';
import utils from '@bigcommerce/stencil-utils';

export const CartPreviewEvents = {
    close: 'closed.fndtn.dropdown',
    open: 'opened.fndtn.dropdown',
};

export default function (secureBaseUrl, cartId) {
    const loadingClass = 'is-loading';
    const $cart = $('[data-cart-preview]');
    const $cartDropdown = $('#cart-preview-dropdown');
    const $cartLoading = $('<div class="loadingOverlay"></div>');

     /* Custom Start */
     const $cart2 = $('[data-cart-preview2]');
     const $cartDropdown2 = $('#custom-cart-sidebar .custom-sidebar-wrapper');

    const $body = $('body');

    if (window.ApplePaySession) {
        $cartDropdown.addClass('apple-pay-supported');
    }

    $body.on('cart-quantity-update', (event, quantity) => {
        $cart.attr('aria-label', (_, prevValue) => prevValue.replace(/\d+/, quantity));

        if (!quantity) {
            $cart.addClass('navUser-item--cart__hidden-s');
        } else {
            $cart.removeClass('navUser-item--cart__hidden-s');
        }

        $('.cart-quantity')
            .text(quantity)
            .toggleClass('countPill--positive', quantity > 0);
        if (utils.tools.storage.localStorageAvailable()) {
            localStorage.setItem('cart-quantity', quantity);
        }
    });

     /* Custom Start */
     if (!$('body').hasClass('page-type-cart')) {
        $cart.on('click', event => {
            const options = {
                template: 'common/cart-preview',
            };
    
            // Redirect to full cart page
            //
            // https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
            // In summary, we recommend looking for the string 'Mobi' anywhere in the User Agent to detect a mobile device.
            if (/Mobi/i.test(navigator.userAgent)) {
                return event.stopPropagation();
            }
    
            event.preventDefault();
    
            /* Custom Start */
            $body.toggleClass('openCartDropdown');
            $cartDropdown2.empty();
    
            $cartDropdown
                .addClass(loadingClass)
                .html($cartLoading);
            $cartLoading
                .show();
    
            utils.api.cart.getContent(options, (err, response) => {
                $cartDropdown
                    .removeClass(loadingClass)
                    .html(response);
                $cartLoading
                    .hide();
            });
        });

        $cart2.on('click', event => {
            const options = {
                template: 'common/cart-preview',
            };
            event.preventDefault();
    
            $body.toggleClass('openCartSidebar');
    
            $cartDropdown.empty();
    
            $cartDropdown2
                .addClass(loadingClass)
                .html($cartLoading);
            $cartLoading
                .show();
    
            utils.api.cart.getContent(options, (err, response) => {
                $cartDropdown2
                    .removeClass(loadingClass)
                    .html(response);
                $cartLoading
                    .hide();
            });
        });
    }

    let quantity = 0;

    if (cartId) {
        // Get existing quantity from localStorage if found
        if (utils.tools.storage.localStorageAvailable()) {
            if (localStorage.getItem('cart-quantity')) {
                quantity = Number(localStorage.getItem('cart-quantity'));
                $body.trigger('cart-quantity-update', quantity);
            }
        }

        // Get updated cart quantity from the Cart API
        const cartQtyPromise = new Promise((resolve, reject) => {
            utils.api.cart.getCartQuantity({ baseUrl: secureBaseUrl, cartId }, (err, qty) => {
                if (err) {
                    // If this appears to be a 404 for the cart ID, set cart quantity to 0
                    if (err === 'Not Found') {
                        resolve(0);
                    } else {
                        reject(err);
                    }
                }
                resolve(qty);
            });
        });

        // If the Cart API gives us a different quantity number, update it
        cartQtyPromise.then(qty => {
            quantity = qty;
            $body.trigger('cart-quantity-update', quantity);
        });
    } else {
        $body.trigger('cart-quantity-update', quantity);
    }


     /* Custom Start */
     $(document).on('click', event => {
        if (($(event.target).closest('[data-cart-preview]').length === 0) && ($(event.target).closest('#cart-preview-dropdown').length === 0) && ($(event.target).closest('#modal').length === 0) && ($(event.target).closest('[data-cart-edit-item-remove]').length === 0)){
            $('body').removeClass('openCartDropdown');
        }
    });
    
    $(document).on('click', event => {
        if (($(event.target).closest('[data-cart-preview2]').length === 0) && ($(event.target).closest('#custom-cart-sidebar').length === 0) && ($(event.target).closest('#modal').length === 0) && ($(event.target).closest('[data-cart-edit-item-remove]').length === 0)){
            $('body').removeClass('openCartSidebar');
        }
    });

    $(document).on('click','#custom-cart-sidebar .custom-sidebar-close', (event) => {
        event.preventDefault();

        $('body').removeClass('openCartSidebar');
    });
}
