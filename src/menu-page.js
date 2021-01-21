function createMenuPage() {
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu')

  const menuPageTitle = document.createElement('div');
  menuPageTitle.classList.add('menu_subtitle', 'subtitle');
  menuPageTitle.textContent = 'Menu';

  const menuRow = document.createElement('div');
  menuRow.classList.add('menu_row');

  const hamburger = createMenuItem('hamburger', '3.99');

  const hamburgerTitle = hamburger.querySelector('.menu-item_title');
  hamburgerTitle.textContent = 'Ocean Hamburger';

  const hamburgerSubtitle = hamburger.querySelector('.menu-item_subtitle');
   hamburgerSubtitle.innerHTML = 'Our legendary <br />burger';

  const cheeseburger = createMenuItem('cheeseburger', '4.99');

  const cheeseburgerTitle = cheeseburger.querySelector('.menu-item_title');
   cheeseburgerTitle.textContent = 'Cheeseburger';

  const cheeseburgerSubtitle = cheeseburger.querySelector('.menu-item_subtitle');
   cheeseburgerSubtitle.innerHTML = 'Ocean Hamburger<br />with cheese';

  const reebs = createMenuItem('reebs', '5.99');

  const reebsTitle = reebs.querySelector('.menu-item_title');
   reebsTitle.textContent = 'BBQ reebs';

  const reebsSubtitle = reebs.querySelector('.menu-item_subtitle');
  reebsSubtitle.innerHTML = 'Barbecue ribs with <br />our secret souse';

  menuRow.append(hamburger, cheeseburger, reebs);
  menuPage.append(menuPageTitle, menuRow);

  return menuPage;
}

function createMenuItem(itemName, price) {
  const menuItem = document.createElement('div');

  menuItem.classList.add('menu_item-row');

  const itemImg = document.createElement('img');
  itemImg.src = `img/${itemName}.png`;
  itemImg.alt = `${itemName}`;
  itemImg.id = `${itemName}`;

  const menuItemTitle = document.createElement('div');
  menuItemTitle.classList.add('menu-item_title');

  const menuItemSubtitle = document.createElement('div');
  menuItemSubtitle.classList.add('menu-item_subtitle');

  const priceBtn = document.createElement('button');
  priceBtn.classList.add('menu-item_price-btn');
  priceBtn.textContent = `${price}$`;

  menuItem.append(itemImg, menuItemTitle, menuItemSubtitle, priceBtn);

  return menuItem;
}

const menuPage = createMenuPage();

export { menuPage };
