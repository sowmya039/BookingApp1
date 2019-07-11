import configureMockStore from 'redux-mock-store';
import { getSavedRooms, updateRooms, saveRooms } from '../actions';
const mockStore = configureMockStore();
const store = mockStore();

describe('Action creators validity tests', () => {
    it('creates a GET_SAVED_ROOMS action', () => {
        store.dispatch(getSavedRooms());
        expect(store.getActions()).toMatchSnapshot();
    });
    it('creates a UPDATE_ROOMS action', () => {
        store.dispatch(updateRooms({}, 2));
        expect(store.getActions()).toMatchSnapshot();
    });
    it('creates a SAVE_ROOMS action', () => {
        store.dispatch(saveRooms());
        expect(store.getActions()).toMatchSnapshot();
    });
});
