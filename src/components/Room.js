import React, { Component } from 'react';
import {
  StyledRoom,
  StyledRoomInner,
  StyledInput,
  StyledRoomName,
  StyledSelect
} from './styles';

export default class Room extends Component {
  _onChange = (ev) => {
    this.props._onChange(ev, this.props.index);
  };
  render() {
    const { room = {}, index } = this.props;
    return (
      <StyledRoom index>
        {index > 0 ? (
          <StyledInput
            type="checkbox"
            checked={room.selected}
            onChange={this._onChange}
          />
        ) : null}
        <StyledRoomName checked={room.selected}>{room.name}</StyledRoomName>

        <StyledRoomInner checked={room.selected}>
          <div>
            <p>Adults</p>
            <p>(18+)</p>
            <StyledSelect
              className="styled-select"
              value={room.adults}
              disabled={!room.selected}
              onChange={this._onChange}
              name="adults"
            >
              {[1, 2].map((item, index) => {return (
                <option value={item} key={`${index}`}>
                  {item}
                </option>
              );})}
            </StyledSelect>
          </div>
          <div>
            <p>Children</p>
            <p>(0-17)</p>
            <StyledSelect
              className="styled-select"
              value={room.children}
              disabled={!room.selected}
              onChange={this._onChange}
              name="children"
            >
              {[0, 1, 2].map((item, index) => {return (
                <option value={item} key={`${index}`}>
                  {item}
                </option>
              );})}
            </StyledSelect>
          </div>
        </StyledRoomInner>
      </StyledRoom>
    );
  }
}
