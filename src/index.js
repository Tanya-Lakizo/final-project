import tabs from './js/modules/tabs.js';
import modal from './js/modules/modal.js';
import timer from './js/modules/timer.js';
import cards from './js/modules/cards.js';
import calc from './js/modules/calc.js';
import portfolio from './js/modules/portfolio.js';
import forms from './js/modules/forms.js';
import slider from './js/modules/slider.js';
import { openModal } from './js/modules/modal.js';

import css from "./css/style.css";
import media from "./css/media.css";
import menu from "./css/mmenu-light.css";
import styles from "./css/about.css";
import aboutmedia from "./css/about_media.css";

import menujs from "./js/mmenu-light.js";
import menujspoly from "./js/mmenu-light.polyfills.js"

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 3000);
    
    modal('[data-modal]', '.modal', modalTimerId);
    forms(modalTimerId);

    // Home page scripts only
    if (isHomePage()) {
        tabs();
        timer();
        calc();
        cards();
        portfolio();
        slider();    
    }
            
});

function isHomePage() {
    const currentLocation = window.location.pathname;
    return currentLocation === '/' || currentLocation === '/index.html'
}
