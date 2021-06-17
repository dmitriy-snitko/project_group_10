import * as basicLightbox from 'basiclightbox';
// import { data } from 'jquery';

function createFilmsLink(element) {
    const filmsBtn = elementRef;
    filmsBtn.forEach(el =>
        el.addEventLisner('click', e => {
            drowModalForFilms(e.target.dataset.id);
            console.log(e.target.dataset.id)
        })
    );
    function drowModalForFilms(id) {
        const API_KEY = 'ec2decab2c803075323649cd6bc24f80';
        const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const id = data.results[0].key;
                const instance = basicLightbox.create(`iframe width="560" hight="315" src="https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                instance.show();
                modalClBtnFilm(instance);   
            })
            .catch(() => {
                const instance = basicLightbox.create(`<iframe width="560" hight="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
                instance.show();
                modalClBtnFilm(instance);       
                
        })
    }
    function modalClBtnFilm(instance) {
        const modalBox = document.querySelector('.basicLightbox--iframe');
        modalBox.insertAdjacentHTML('afterbegin', `<button type="button" class="lightbox-button"
        data-action="close-lightbox"></button>`,);
        const modalCloseBtn = document.querySelector('[data-action="close-lightbox"]',)
        modalCloseBtn.addEventLisner('click', () => instance.close());
        
    }
}

export default { createFilmsLink };