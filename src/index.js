import { header } from './header';
import { mainPage } from './main-page';
import { teamPage } from './team-page';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';

function renderSite(...pages) {
  const body = document.querySelector('body');
  const content = document.querySelector('#content');

  body.insertBefore(header, content);
  content.insertBefore;

  for (let i = 0; i < pages.length; i++) {
    content.append(pages[i]);
  }
}

renderSite(mainPage, teamPage, menuPage, contactPage);

function activateTabSwitching() {
  const headerLogo = document.querySelector('.header_logo');
  const ourTeamLink = document.querySelector('#our-team');
  const menuLink = document.querySelector('#menu');
  const contactLink = document.querySelector('#contact');
  const menuBtn = document.querySelector('.menu-btn_row');

  ourTeamLink.addEventListener('click', () => {
    mainPage.style = 'display: none';
    menuPage.style = 'display: none';
    contactPage.style = 'display: none';
    teamPage.style = 'display:block';

    ourTeamLink.classList.add('active-tab');
    menuLink.classList.remove('active-tab');
    contactLink.classList.remove('active-tab');
  });

  menuLink.addEventListener('click', () => {
    mainPage.style = 'display: none';
    teamPage.style = 'display: none';
    contactPage.style = 'display: none';
    menuPage.style = 'display: block';

    menuLink.classList.add('active-tab');
    ourTeamLink.classList.remove('active-tab');
    contactLink.classList.remove('active-tab');
  });

  contactLink.addEventListener('click',() => {
    mainPage.style = 'display: none';
    teamPage.style = 'display: none';
    menuPage.style = 'display: none';
    contactPage.style = 'display: block';

    contactLink.classList.add('active-tab');
    menuLink.classList.remove('active-tab');
    ourTeamLink.classList.remove('active-tab');
  })

  headerLogo.addEventListener('click',() => {
    teamPage.style = 'display: none';
    menuPage.style = 'display: none';
    contactPage.style = 'display: none';
    mainPage.style = 'display: block';

    contactLink.classList.remove('active-tab');
    menuLink.classList.remove('active-tab');
    ourTeamLink.classList.remove('active-tab');
  })

  menuBtn.addEventListener('click',() => {
    mainPage.style = 'display: none';
    teamPage.style = 'display: none';
    contactPage.style = 'display: none';
    menuPage.style = 'display: block';

    menuLink.classList.add('active-tab');
    ourTeamLink.classList.remove('active-tab');
    contactLink.classList.remove('active-tab');
  })
}

activateTabSwitching();
