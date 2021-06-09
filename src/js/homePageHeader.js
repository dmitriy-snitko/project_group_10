import homePageHeaderTemplate from '/templates/home-page-header.hbs';

const refs = {
    homePageLogo: document.querySelector('.home-page-logo'),
    homePageLink: document.querySelector('#home-link'),
    homePageBody: document.querySelector('body'),
}

console.log(refs);

refs.homePageLogo.addEventListener('click', renderHomePageHeader);
refs.homePageLink.addEventListener('click', renderHomePageHeader);


export default function renderHomePageHeader() {
    refs.homePageBody.innerHTML = homePageHeaderTemplate;
    console.log(homePageHeaderTemplate);
}
