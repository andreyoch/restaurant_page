const mainPage = document.createElement('div');
mainPage.classList.add('main-page');

const mainPageRow = document.createElement('div');
mainPageRow.classList.add('main-page_row');

const mainPageTitleRow = document.createElement('div');
mainPageTitleRow.classList.add('main-page_title-row');

const mainPageTittle = document.createElement('h1');
mainPageTitleRow.classList.add('main-page-title');
mainPageTitleRow.innerHTML = 'The best<br />burgers from<br />deep see';

const mainPageTittleLine = document.createElement('div');
mainPageTittleLine.classList.add('main-page-title_line');

function createMenuBtn() {
  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menu-btn');

  const menuBtnRow = document.createElement('div');
  menuBtnRow.classList.add('menu-btn_row');

  const menuButtonIcon = document.createElement('img');
  menuButtonIcon.src = 'img/menu-btn-icon.png';
  menuButtonIcon.alt = 'menu button icon';

  const menuBtnText = document.createElement('span');
  menuBtnText.classList.add('menu-btn_text');

  menuBtn.append(menuBtnRow);
  menuBtnRow.append(menuButtonIcon)
  menuBtnRow.append(menuBtnText);

  return menuBtn;
}
