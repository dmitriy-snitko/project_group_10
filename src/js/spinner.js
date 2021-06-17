import 'spin.js/spin.css';
import { Spinner } from 'spin.js';

const opts = {
  lines: 16, // The number of lines to draw
  length: 50, // The length of each line
  width: 17, // The line thickness
  radius: 60, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#eae6e4', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
  
};
// export const spinner = new Spinner(opts);
// спінер на moviesGallery
const spinnerMovieListEl = document.querySelector('.movie-list');
const spinner = new Spinner(opts).spin(spinnerMovieListEl);

export function stopSpinner() {
    spinner.stop();
}
// // спінер на li
export function addSpinsMoviesItems() {
    const spinMoviesItemEl = document.querySelectorAll('.movie');
    spinMoviesItemEl.forEach(addSpinMoviesItem);
};


// cпінер на модалку

export function addSpinnerModalWindow() {
    
    const spinnerModalWindowEl = document.querySelector('.cardfilm');
    const spinnerModalWindow = new Spinner({...opts, scale: 0.5, top: '20%'}).spin(spinnerModalWindowEl);
    setTimeout(function stopSpinner() {
        spinnerModalWindow.stop();
        console.log(stopSpinner);
    }, 1000);
}
