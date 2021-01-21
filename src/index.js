import { header } from './header';
import { mainPage } from './main-page';
import { teamPage } from './team-page';


function rednerSite(...pages) {
  const content = document.querySelector('#content');
  for (let i = 0; i < pages.length; i++) {
    content.append(pages[i]);
  }
}

rednerSite(mainPage,teamPage)