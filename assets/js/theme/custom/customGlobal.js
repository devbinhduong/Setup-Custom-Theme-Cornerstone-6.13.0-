import utils from '@bigcommerce/stencil-utils';
import modalFactory from '../global/modal';
import { load } from 'webfontloader';
import event from '../global/jquery-migrate/event';
import { forEach } from 'lodash';

import megaMenuEditor from './megaMenuEditor';
import loginPopup from './loginPopup';

export default function(context) {
    const themeSettings = context.themeSettings;

    /* Scroll position */
    var scroll_position = window.scrollY;

    var check_JS_load = true;

    /* Contains all functions  that are needed to be executed after JS is loaded */
    function loadFunction () {
        if(check_JS_load) {
            check_JS_load = false;
            const wWidth = window.innerWidth;
            console.log("JS is loaded");

            /* Add global function here */
            closeSidebar();
            clickOverlay();
            searchFormMobile();

            if (wWidth <= 1024) {
                searchMobileClick();
            }

            /* Mega Menu Editor */
            megaMenuEditor(context);
            activeMenuMobile();
            hoverMenu();

            /* Logion  / Register Modal */
            authPopup();
            authSidebarMobile();

            if (!document.body.classList.contains('page-type-login')) {
                loginPopup();
            }
        }
    }

    function eventLoad(){
        /* Load when DOM ready */
        window.addEventListener('load', (e) =>{

            /* Global Slick Slider */
            const sectionSlicks = document.querySelectorAll('.section-slick');
            if(sectionSlicks.length > 0) {
                for(let i = 0; i < sectionSlicks.length; i++) {
                    const sectionSlick = sectionSlicks[i];
                    const sectionSlickOptions = sectionSlick.getAttribute('data-slick-options');
                    if(sectionSlickOptions) {
                        const options = JSON.parse(sectionSlickOptions);
                        $(sectionSlick).slick(options);
                    }
                }
            }

            /* Load Section when scroll */
            sectionLoad();
        });

        /* Load when scroll */
        window.addEventListener('scroll', (e) => {});

        /* Load when user action on site */
        ['keydown', 'mousemove', 'touchstart'].forEach(event => {
            document.addEventListener(event, () => {
                loadFunction();
            });
        });

        /* Load when resize */
        window.addEventListener('resize', (e) => {});
    }
    eventLoad();

    /* Hide all Sidebar */
    function hideAllSidebar() {
        const body = document.body,
            menuMobileIcon = document.querySelector('.mobileMenu-toggle'),
            searchMobileButton = document.querySelector("[data-search='quickSearch']"),
            pageSidebar = document.querySelector('.page-sidebar'),
            pageSidebarMobile = document.querySelector('.page-sidebar-mobile'),
            authSidebarMobile = document.querySelector('.custom-auth-sidebar');

        /* Hide menu sidebar */
        if(body.classList.contains('has-activeNavPages')) {
            menuMobileIcon.click();
        }

        searchMobileButton.classList.remove('is-open');
        body.classList.remove('openSearchMobile');
        body.classList.remove('openSidebar');
        body.classList.remove('openAuthSidebar');
        authSidebarMobile?.classList.remove('is-open');
        pageSidebar?.classList.remove('is-open');
        pageSidebarMobile?.classList.remove('is-open');

    }

    /* Close sidebar */
    function closeSidebar() {
        const closeButtons = document.querySelectorAll('.custom-sidebar-close');
        if(!closeButtons) return;
        
        for(let i = 0; i < closeButtons.length; i++) {
            closeButtons[i].addEventListener('click', (e) => {
                e.preventDefault();
                hideAllSidebar();
            });
        }
    }

    function clickOverlay() {
        const backgroundOverlay = document.querySelector('.background-overlay');
        if(!backgroundOverlay) return;

        backgroundOverlay.addEventListener('click', (e) => {
            hideAllSidebar();
        });
    }

    /* Custom Animate */
    function customAnimate(section) {
        if(section.matches('.animate-loaded')) return;

        section.classList.add('animate-loaded');

        section.classList.add('animated');
    }

    function sectionLoad() {
        const handler = (entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const section = entry.target;
                    const sectionType = section.getAttribute('data-section-load');

                    switch(sectionType) {
                        case 'animation':
                            customAnimate(section);
                            break;
                        
                        default:
                            break;
                    }
                }
            });
        }

        const sections = document.querySelectorAll('[data-section-load]'),
        options = {
            threshold: .05
        };

        if(!sections) return;

        const observer = new IntersectionObserver(handler, options);

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    /* Search Mobile */
    function searchFormMobile() {
        const quickSearchForm = document.getElementById("quickSearch"),
            hasOnDesktop = document.querySelector('.item--quicksearch #quickSearch'),
            searchSidebarDesktop = document.querySelector('.item--quicksearch'),
            searchSidebarMobile = document.querySelector('#custom-search-mobile .custom-sidebar-wrapper');

        if(window.innerWidth <= 1024) {
            if(hasOnDesktop) {
                searchSidebarMobile.appendChild(quickSearchForm);
            } 
        } else {
            if(!hasOnDesktop) {
                searchSidebarDesktop.appendChild(quickSearchForm);
            }
        }
    }

    function searchMobileClick() {
        const body = document.body,
            searchMobileButton = document.querySelector("[data-search='quickSearch']");

        if(!searchMobileButton) return;

        searchMobileButton.addEventListener('click', (e) => {
            e.preventDefault();
            if(searchMobileButton.classList.contains('is-open')) {
                body.classList.remove('openSearchMobile');
                searchMobileButton.classList.remove('is-open');
            } else {
                body.classList.add('openSearchMobile');
                searchMobileButton.classList.add('is-open');
            }
        });
    }

    function activeMenuMobile() {
        var menuPc = document.querySelector('#menu .navPages-list:not(.navPages-list--user)'),
            menuMobile = document.querySelector('#custom-menu-mobile .navPages-list:not(.navPages-list--user)'),
            menuMobileToggle = document.querySelector('.mobileMenu-toggle');

        if (window.innerWidth <= 1024) {
            menuMobileToggle.addEventListener('click', function(event) {
                if (menuPc) {
                    if (!menuMobile.children.length) {
                        while (menuPc.children.length > 0) {
                            menuMobile.appendChild(menuPc.children[0]);
                        }
                    }
                }
            });
        }

    }


    function hoverMenu () {
        const menuItemList = document.querySelectorAll('.navPages-list:not(.navPages-list--user) > .navPages-item.has-dropdown');

        if(window.innerWidth > 1024 && menuItemList.length) {
            menuItemList.forEach(menuItem => {
                menuItem.addEventListener('mouseover', (e) => {
                    document.body.classList.add('openMenuPC');
                    menuItem.classList.add('animated');
                });

                menuItem.addEventListener('mouseleave', (e) => {
                    document.body.classList.remove('openMenuPC');
                    menuItem.classList.remove('animated');
                });
            });
        }
    }

    function authPopup() {
        let authButton = document.querySelector("[data-login-form]");

        if(!authButton) return;

        authButton.addEventListener('click', (e) => {
            e.preventDefault();

            const target = e.currentTarget;

            if (!document.body.classList.contains('page-type-login')) {
                target.nextElementSibling.classList.toggle('is-open'); 
            } else {
                $('html, body').animate(
                    {
                        scrollTop: $('.login').offset().top,
                    },
                    700
                );
            }
        });

        document.addEventListener('click', (event) => {
            const customAuthPopup = document.querySelector('.custom-auth-popup');
        
            if (customAuthPopup.classList.contains('is-open')) {
                if (
                    !event.target.closest('.custom-auth-popup') &&
                    !event.target.closest('[data-login-form]')
                ) {
                    customAuthPopup.classList.remove('is-open');
                }
            }
        });
    }
    
    function authSidebarMobile() {
        const loginMobileButton = document.querySelector("[data-login-form-mobile]"),
            authSidebar = document.querySelector('.custom-auth-sidebar');

        if(!loginMobileButton || !authSidebar) return;

        loginMobileButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (!document.body.classList.contains('page-type-login')) {
                if(authSidebar.classList.contains('is-open')) {
                    authSidebar.classList.remove('is-open');
                    document.body.classList.remove('openAuthSidebar');
                } else {
                    authSidebar.classList.add('is-open');
                    document.body.classList.add('openAuthSidebar');
                }
                
            } else {
                $('html, body').animate(
                    {
                        scrollTop: $('.login').offset().top,
                    },
                    700
                );
            }
        })
    }
}