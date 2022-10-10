import styled from "styled-components";

const seats = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
];

export default function SeatsPage() {
  return (
    <Page>
      <Text>
        <p>Selecione o(s) assento(s)</p>
      </Text>
      <Seats>
        {seats.map((item) => (
          <div className="chair">{item}</div>
        ))}
      </Seats>
      <Seats>
        <div className="chair"></div>
        <div className="chair"></div>
        <div className="chair"></div>
      </Seats>
      <InputContainer>
        <p>Nome do comprador:</p>
        <input type="text" placeholder="Digite seu nome..." />
      </InputContainer>
      <InputContainer>
        <p>CPF do comprador:</p>
        <input type="text" placeholder="Digite seu CPF..." />
      </InputContainer>
      <Footer>
        <img src="" alt="" />
        <p>
          Enola Holmes
          <br />
          Quinta-feira - 15:00
        </p>
      </Footer>
    </Page>
  );
}

const Page = styled.div`
  padding: 67px 30px 30px 30px;
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

const Seats = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  div {
    cursor: pointer;
    background: #c3cfd9;
    border: 1px solid #808f9d;
    border-radius: 12px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    font-size: 11px;
    margin: 0 8px 18px 0;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 8px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding: 0 18px;
  }
  input ::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    color: #afafaf;
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
