import constants from './constants';
const storageMiddleware = (store) => {return (next) => {return (action) => {
  let rooms = [];
  if (action.type === constants.GET_SAVED_ROOMS) {
    if (
      window &&
      window.localStorage &&
      typeof window.localStorage.setItem === 'function'
    ) {
      try {
        rooms = JSON.parse(localStorage.getItem('rooms_booking')) || [];
        if (rooms.length) {
          next({ ...action, rooms });
        }
      } catch (e) {
        console.log('error parsing response');
      }
    }
  } else if (action.type === constants.SAVE_ROOMS) {
    rooms = store.getState();
    if (
      window &&
      window.localStorage &&
      typeof window.localStorage.setItem === 'function'
    ) {
      localStorage.setItem('rooms_booking', JSON.stringify(rooms));
    }
  } else {
    next(action);
  }
};};};
export default storageMiddleware;
