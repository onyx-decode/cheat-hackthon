import { updateDOM } from '../Helper/vDOM.js';
//import { events } from '../Helper/events.js';
import Navbar from '../pages/Navbar.js';
import Home from '../pages/Home.js';
import AboutUs from '../pages/AboutUs.js';
import SpecialFeatures from '../pages/SpecialFeatures.js';
import Footer from '../pages/Footer.js';
import PageNotFound from '../pages/PageNotFound.js';

let previousVdom = null;

function router() {
    const root = document.getElementById('app');
    const currentPage = window.location.pathname || '/'; 

    let page;
    switch (currentPage) {
        case '/':
            page = Home();
            break;
        case '/aboutus':
            page = AboutUs();
            break;
        case '/product':
            page = SpecialFeatures();
            break;
        case '*':
            page = PageNotFound(); 
            break;
        default:
            page = Home(); 
            break;
    }


    const app = `
        ${Navbar()}
        ${page}
        ${Footer()}
    `;

    updateDOM(root, app, previousVdom);
    previousVdom = app; 
}


window.addEventListener('popstate', router); 
window.addEventListener('DOMContentLoaded', router); 

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const path = e.target.getAttribute('href');
        window.history.pushState({}, '', path);
        router();
    }
});
