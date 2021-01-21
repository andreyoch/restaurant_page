function createMenuBtn() {
  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menu-btn');
  
  const menuBtnRow = document.createElement('div');
  menuBtnRow.classList.add('menu-btn_row');

  const menuBtnImg = document.createElement('img');
  menuBtnImg.src = 'img/menu-btn-icon.png';
  menuBtnImg.alt = 'menu button icon';

  const menuBtnText = document.createElement('span');
  menuBtnText.classList.add('menu-btn_text');
  menuBtnText.textContent = 'Menu';

  menuBtnRow.append(menuBtnImg,menuBtnText);
  menuBtn.append(menuBtnRow);

  return menuBtn;
}


function createMainPage() {
  const mainPage = document.createElement('div');
  mainPage.classList.add('main-page');

  const mainPageRow = document.createElement('div');
  mainPageRow.classList.add('main-page_row');

  const mainPageTittleRow = document.createElement('div');
  mainPageTittleRow.classList.add('main-page_title-row');

  const mainPageTittle = document.createElement('h1');
  mainPageTittle.classList.add('main-page-title');
  mainPageTittle.innerHTML = 'The best<br />burgers from<br />deep see';

  const mainPageTittleLine = document.createElement('div');
  mainPageTittleLine.classList.add('main-page-title_line');

  const menuBtn = createMenuBtn();

  const mainPageImg = document.createElement('div');
  mainPageImg.classList.add('main-page_main-img');

  const mainImg = document.createElement('img');
  mainImg.src = 'img/main-img.png';
  mainImg.alt = 'Ocean Burers Restaurant Image';
  mainImg.id = 'main-img';

  mainPageImg.append(mainImg);
  mainPageTittleRow.append(mainPageTittle,mainPageTittleLine,menuBtn);
  mainPageRow.append(mainPageTittleRow,mainPageImg);

  mainPage.append(mainPageRow);

  return mainPage;

}

const mainPage = createMainPage();

export {mainPage};