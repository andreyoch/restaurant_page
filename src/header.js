const header = document.createElement('header');
header.classList.add('header');

const headerLogo = document.createElement('span');
headerLogo.classList.add('header_logo')

const ourTeamHeaderLink = document.createElement('a');
ourTeamHeaderLink.classList.add('header_link');
ourTeamHeaderLink.id = 'our-team';
ourTeamHeaderLink.href = '#';
ourTeamHeaderLink.textContent = 'Our Team';


const menuHeaderLink = document.createElement('a');
menuHeaderLink.classList.add('header_link');
menuHeaderLink.id = 'menu';
menuHeaderLink.href = '#';
menuHeaderLink.textContent = 'Menu';

const contactHeaderLink = document.createElement('a');
contactHeaderLink.classList.add('header_link');
contactHeaderLink.id = 'contact';
contactHeaderLink.href = '#';
contactHeaderLink.textContent = 'Contact';

header.append(headerLogo,ourTeamHeaderLink,menuHeaderLink,contactHeaderLink);

export default header;