import NewFetchApiFilms from './movieApiService';

// import 'paginationjs';

// const NewFetchApiFilms = new NewFetchApiFilms();
const refs = {
    pagination: document.querySelector('.pagination'),
    previous: document.querySelector('.arrowLeft'),
    next: document.querySelector('.arrowRight'),
    pageItems: document.querySelector('.pagination-link'),
}
let filmsOnPage = 20;

const pageItemArr = [];
console.log(pageItemArr)
// let countPage = Math.ceil(pageItemArr / filmsOnPage);
for (let i = 1; i <= 10; i++) {
    const liEl = document.createElement('li');
    refs.pagination.insertBefore(liEl, refs.next);
    liEl.classList.add('pagination-item');
    pageItemArr.push(liEl);

    const linkItem = document.createElement('a');
    linkItem.href = "#";
    linkItem.classList.add('pagination-link');
    linkItem.innerHTML = i;

    liEl.appendChild(linkItem);
}

pageItemArr[0].firstElementChild.classList.add('active');
refs.pagination.addEventListener('click', onClickPage);

function onClickPage(event) {
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !== "A") return;
    
}
function setActiveLink(nextActiveLink) {
    const currentActiveLink = refs.pagination.querySelector(".pagination-link.active");

    if (currentActiveLink) {
        currentActiveLink.classList.remove("active");
    }
    nextActiveLink.classList.add("active");
}
