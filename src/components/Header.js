import styled from "styled-components";

export default function Header() {
  return <Topper>CINEFLEX</Topper>;
}

const Topper = styled.div`
  width: 100%;
  height: 67px;
  background: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  color: #e8833a;
  font-weight: 400;
  font-size: 34px;
  position: fixed;
  top: 0;
  left: 0;
`;
