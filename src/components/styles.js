import styled from 'styled-components';
/*Main container section*/
export const StyledContainer = styled.section`
  padding: 10px;
`;

export const StyledApp = styled.div`
  font-family: sans-serif;
  font-size: 100%;
`;
/* styles for each room section*/
export const StyledRoom = styled.section`
  width: 10%;
  min-width: 12.5rem;
  margin: 1.2rem;
  border-radius: 0.625rem;
  border: 2px solid #ccc;
  background-color: #ddd;
  display: inline-block;
  text-align: ${(props) => {return (props.index > 0 ? 'center' : '');}};
`;
/* section for Adults and children divs*/
export const StyledRoomInner = styled.section`
  padding: 15px;
  display: flex;
  justify-content: space-around;
  border-radius: 0px 0px 10px 10px;
  background-color: ${(props) => {return (props.checked ? 'white' : '');}};
`;
/*checkbox*/
export const StyledInput = styled.input`
  float: left;
  margin-top: 1.25rem;
  margin-left: 3.125rem;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #ccc;
`;

/* when room is not selected/unchecked, room name shoud not be bold */
export const StyledRoomName = styled.h4`
  font-weight: ${(props) => {return (props.checked ? '' : 'normal');}};
`;

/* To increase the size of the select option*/
export const StyledSelect = styled.select`
  height: 25px;
  width: 40px;
  font-size: 15px;
`;
/*Input submit button*/
export const Input = styled.input`
  background-color: #b8bdb8;
  color: rgb(10, 10, 10);
  padding: 10px;
  margin-left: 12px;
  width: 6rem;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  display: inline-block;
  border: none;

  @media only screen and (max-width: 1200px) {
    width: 15%;
  }
  @media only screen and (max-width: 1023px) {
    width: 18%;
  }

  @media only screen and (max-width: 700px) {
    width: 25%;
  }
  @media only screen and (max-width: 320px) {
    width: 25%;
  }
  @media only screen and (max-width: 290px) {
    width: 35%;
  }
  @media only screen and (max-width: 290px) {
    width: 40%;
  }
  @media only screen and (max-width: 290px) {
    width: 45%;
  }
`;
export const StyledClear = styled.div`
  clear: both;
`;
