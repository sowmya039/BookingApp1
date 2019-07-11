import React from 'react';
import { shallow, mount } from 'enzyme';
import { Booking } from '../components/Booking';
import sinon from 'sinon';
import toJson from 'enzyme-to-json';
const [getSavedRooms, updateRooms, saveRooms] = new Array(3).fill(jest.fn());

function setup(isFull = false) {
    const props = {
        rooms: [
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
        ],
        getSavedRooms,
        updateRooms,
        saveRooms
    };
    const renderFunc = isFull ? mount : shallow;
    const enzymeWrapper = renderFunc(<Booking {...props} />);
    return {
        props,
        enzymeWrapper
    };
}

describe('Shallow/full-mount of Booking App', () => {
    it('StyledContainer,form element should be available', () => {
        const {enzymeWrapper } = setup();
        expect(enzymeWrapper.find('[data-test="styledcontainer"]').length).toBe(1);
        expect(enzymeWrapper.find('[data-test="form-element"]').length).toBe(1);
    });
    it('should contain n rooms as specified in props', () => {
        const { props, enzymeWrapper } = setup(true);
        expect(enzymeWrapper.find('[data-test="room-element"]').length).toBe(props.rooms.length);
    });
    it('room checkbox should be checked/unchecked based on props', () => {
        const { props, enzymeWrapper } = setup(true);
        const roomElms = enzymeWrapper.find('[data-test="room-element"]');
        expect(roomElms.at(1).find('input').find('[type="checkbox"]').prop('checked')).toBe(props.rooms[1].selected);
    });
    it('room name should match with props value', () => {
        const { props, enzymeWrapper } = setup(true);
        const roomElms = enzymeWrapper.find('[data-test="room-element"]');
        expect(roomElms.at(0).find('h4').text()).toBe(props.rooms[0].name);
    });
});

describe('method calls', () => {
    let wrapper;
    beforeEach(() => {
        sinon.spy(Booking.prototype, '_onChange');
        sinon.spy(Booking.prototype, '_onSubmit');
        const { enzymeWrapper } = setup(true);
        wrapper = enzymeWrapper;
    });
    afterEach(() => {
        Booking.prototype._onSubmit.restore();
        Booking.prototype._onChange.restore();
    });
    it('should invoke _onChange', () => {
        const roomElms = wrapper.find('[data-test="room-element"]');
        const checkBox = roomElms.at(1).find('input').find('[type="checkbox"]');
        checkBox.simulate('change');
        expect(Booking.prototype._onChange.calledOnce).toBe(true);
    });
});

describe('Snapshot Testing', () => {
    it('should match snapshot when shallow', () => {
        const { enzymeWrapper } = setup();
        expect(toJson(enzymeWrapper)).toMatchSnapshot();
    });
});