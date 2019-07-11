import React, { Component } from 'react';
import Room from './Room';
import { connect } from 'react-redux';
import { getSavedRooms, updateRooms, saveRooms } from '../actions';
import { StyledContainer, StyledClear, Input } from './styles';

export class Booking extends Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getSavedRooms();
  }
  _onChange(ev, index) {
    this.props.updateRooms(ev, index);
  };

  _onSubmit(ev) {
    ev.preventDefault();
    this.props.saveRooms();
  };
  render() {
    const { rooms = [] } = this.props;
    return (
      <StyledContainer data-test="styledcontainer">
        <form onSubmit={this._onSubmit} data-test="form-element">
          {rooms.map((room, index) => {
            return (
              <Room
                data-test="room-element"
                room={room}
                key={`${index}`}
                index={index}
                _onChange={this._onChange}
              />
            );
          })}
          <StyledClear />
          <Input type="submit" value="Submit" />
        </form>
      </StyledContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSavedRooms: () => {return dispatch(getSavedRooms());},
    updateRooms: (ev, index) => {return dispatch(updateRooms(ev, index));},
    saveRooms: () => {return dispatch(saveRooms());}
  };
};
const connectedBooking = connect(
  mapStateToProps,
  mapDispatchToProps
)(Booking);
export default connectedBooking;
