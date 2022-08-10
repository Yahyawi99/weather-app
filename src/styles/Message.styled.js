import styled from "styled-components";

export const MessagePopUp = styled.div`
  min-width: 100px;
  background: tomato;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  border-radius: 5px;
  transform: ${({ value }) => `translateY(${value}px)`};
  transition: 0.25s;
  padding: 15px 25px;
`;
