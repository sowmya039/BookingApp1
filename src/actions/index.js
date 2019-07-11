import constants from '../constants';

function getSavedRooms(rooms = []) {
  return {
    type: constants.GET_SAVED_ROOMS,
  };
}

function updateRooms(ev, index) {
  return {
    type: constants.UPDATE_ROOMS,
    payload: {
      ev,
      index
    }
  };
}

function saveRooms() {
  return {
    type: constants.SAVE_ROOMS
  };
}
export { getSavedRooms, updateRooms, saveRooms };
