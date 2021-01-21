function createContactPage() {
  const contactPage = document.createElement('div');
  contactPage.classList.add('contacts');

  const contactPageSubtitle = document.createElement('div');
  contactPageSubtitle.classList.add('contacts_subtitle', 'subtitle');

  const mainImg = createImgWithContainer('main-img');

  const doorDashLogo = createImgWithContainer('doordash-logo');

  const addres = document.createElement('div');
  addres.className = 'contacts_addres contacts-subtitle2';
  addres.textContent = '1247 Coral Way, Miami, FL 33145 USA';

  const phoneNumber = document.createElement('div');
  phoneNumber.className = 'contact_phone-number contacts-subtitle2';
  phoneNumber.textContent = '+1 786-361-2457';

  contactPage.append(contactPageSubtitle,mainImg,addres,phoneNumber,doorDashLogo);

  return contactPage;
}

function createImgWithContainer(imageName) {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('contacts_image-container');

  const img = document.createElement('img');
  img.src = `img/${imageName}.png`;
  img.alt = `${imageName}`;
  img.className = 'contacts-img';

  imgContainer.append(img);

  return imgContainer;
}

const contactPage = createContactPage();

export {contactPage};