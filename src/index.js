import { header } from './header';
import { mainPage } from './main-page';
import { teamPage } from './team-page';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';

function rednerSite(...pages) {
  const body = document.querySelector('body');
  const content = document.querySelector('#content');

  body.insertBefore(header, content);
  content.insertBefore;

  for (let i = 0; i < pages.length; i++) {
    content.append(pages[i]);
  }
}

rednerSite(mainPage, teamPage, menuPage, contactPage);
