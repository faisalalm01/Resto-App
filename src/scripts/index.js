/* eslint-disable import/no-unresolved */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'regenerator-runtime';

import './comp/Navbar';
import './comp/Hero';
import './comp/Footer';

import App from './views/App';
import swRegister from './utils/sw-register';
// import CONFIG from './global/config';

import '../styles/main.css';
import '../styles/responsive.css';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
