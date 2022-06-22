import _ from "lodash";

import { contactPage } from "./contact";
import { homePage, navBar } from "./home-page";
import { menuPage } from "./menu-page";

(function() {
    
    // Create the main parts of the home page
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    // append the elements
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);

    // Landing page
    navBar();
    homePage();
    const viewMenu = document.querySelector('#view-menu');
    
    viewMenu.addEventListener('click', menuPage);

    // Changing pages
    const navMenu = Array.from(document.querySelectorAll('.nav-bar'));
    navMenu.forEach(element => element.addEventListener('click', (e) => {
        if(element.id === 'menu') {
            menuPage();
        }
        else if(element.id === 'contact') {
            contactPage();
        }
        else {
            homePage();
        }
    }));
})();
