import {header} from './header'
import {mainPage} from './main-page';
import {teamPage} from './team-page';


// function renderMainPage() {
//     const content = document.querySelector('#content');
//     content.append(mainPage);
// }

// renderMainPage();

function renderTeamPage() {
    const content = document.querySelector('#content');
    content.append(teamPage);
}

renderTeamPage();