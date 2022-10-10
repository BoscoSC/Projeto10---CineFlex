import styled from "styled-components";

export default function MoviePage() {
  return (
    <Page>
      <Text>
        <p>Selecione o horário</p>
      </Text>
      <Session>
        <p>Quinta-feira - 24/06/2021</p>
        <ButtonContainer>
          <button>15:00</button>
          <button>19:00</button>
        </ButtonContainer>
      </Session>
      <Session>
        <p>Quinta-feira - 24/06/2021</p>
        <ButtonContainer>
          <button>15:00</button>
          <button>19:00</button>
        </ButtonContainer>
      </Session>
      <Footer>
        <img src="" alt="" />
        <p>Enola Holmes</p>
      </Footer>
    </Page>
  );
}

const Page = styled.div`
  padding: 67px 30px;
`;

const Text = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: "Roboto";
    font-size: 24px;
    color: #293845;
  }
`;

const Session = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-family: "Roboto";
  font-size: 20px;
  color: #293845;
`;

const ButtonContainer = styled.div`
  display: flex;

  button {
    font-family: "Roboto";
    cursor: pointer;
    text-align: center;
    margin-right: 8px;
    width: 82px;
    height: 43px;
    background: #e8833a;
    color: #ffffff;
    border-radius: 3px;
  }
`;

const Footer = styled.div`
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  position: fixed;
  width: 100%;
  height: 117px;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;

  img {
    margin: 15px 10px;
    width: 64px;
    height: 89px;
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 26px;
    display: flex;
    color: #293845;
  }
`;
