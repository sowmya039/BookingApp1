import reducer from '../reducer';
import types from '../constants';
const initialState = [
    {
        name: 'Room 1',
        selected: true,
        adults: 1,
        children: 0
    },
    {
        name: 'Room 2',
        selected: false,
        adults: 1,
        children: 0
    },
    {
        name: 'Room 3',
        selected: false,
        adults: 1,
        children: 0
    },
    {
        name: 'Room 4',
        selected: false,
        adults: 1,
        children: 0
    }
];
const roomsData = [
    {
        name: 'Room 1',
        selected: true,
        adults: 1,
        children: 0
    },
    {
        name: 'Room 2',
        selected: false,
        adults: 1,
        children: 0
    }
];
describe('Testing the reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });
    it('should handle GET_SAVED_ROOMS', () => {
        expect(reducer(undefined, {
            type: types.GET_SAVED_ROOMS,
            rooms: roomsData
        })).toEqual(roomsData);
    });
    it('should handle UPDATE_ROOMS when a room is checked/unchecked', () => {
        const mockroomsData = initialState.slice(0);
        mockroomsData[1].selected = true;
        mockroomsData[2].selected = true;
        mockroomsData[3].selected = true;
        expect(reducer(initialState, {
            type: types.UPDATE_ROOMS,
            payload: {
                index: 3,
                ev: {
                    target: {
                        checked: true
                    }
                }
            }
        })).toEqual(mockroomsData);

        //test to validate uncheck
        mockroomsData[1].selected = false;
        mockroomsData[2].selected = false;
        mockroomsData[3].selected = false;
        expect(reducer(initialState, {
            type: types.UPDATE_ROOMS,
            payload: {
                index: 1,
                ev: {
                    target: {
                        checked: false
                    }
                }
            }
        })).toEqual(mockroomsData);
    });

});