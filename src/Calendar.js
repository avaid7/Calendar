import styled from "styled-components";

// Styling applied to the date picker
export const PickerWrapper = styled.div`
  border: 1px solid red;
  border-radius: 7px;
  width: 500px;
`;

// Styling applied to month and year of the date prop
export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Styling applied to give equal space to every date
export const SevenColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

// Styling applied to the date provided as a prop
export const GivenDate = styled.div`
  background-color: #FF0000;
`;