import alertify from 'alertifyjs';

alertify.defaults = {
  notifier:{
    delay: 5,
    position: 'top-right',
  },
};

export function onSearchFailed() {
  alertify.warning('Search result failed. Enter the correct movie name and try again.');
};

export function onEmptyQuery() {
  alertify.warning('Enter the correct movie name.');
};

export function onError(error) {
  console.log(error);
  alertify.error(`${error}`);
}