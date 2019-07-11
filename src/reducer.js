import constants from './constants';

export default (state = [], action) => {
  switch (action.type) {
    case constants.GET_SAVED_ROOMS: {
      return action.rooms;
    }
    case constants.UPDATE_ROOMS: {
      const rooms = state.slice(0);
      const { ev = {}, index } = action.payload;
      const updatedRooms = rooms.map((room, idx) => {
        if (ev.target.type === 'checkbox' && idx !== 0) {
          if (ev.target.checked) {
            room.selected = idx <= index;
          } else if (idx >= index) {
              room.selected = false;
              room.adults = 1;
              room.children = 0;
            }
        }
        if (idx === index) {
          room[ev.target.name] = ev.target.value;
        }
        return room;
      });
      return updatedRooms;
    }
    default:
      return state;
  }
};
