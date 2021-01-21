import {header} from './header'
import {mainPage} from './main-page';


function renderMainPage() {
    const content = document.querySelector('#content');
    content.append(mainPage);
}

renderMainPage();