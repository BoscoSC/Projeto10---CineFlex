import styled from "styled-components";

export default function SucessPage() {
  return (
    <Page>
      <Text>
        <p>Pedido feito com sucesso!</p>
      </Text>
      <InfoSection>
        <h1>Filme e sessão</h1>
        <p>
          Enola Holmes <br /> 24/06/2021 15:00
        </p>
      </InfoSection>
      <InfoSection>
        <h1>Ingressos</h1>
        <p>
          Assento 15 <br /> Assento 16
        </p>
      </InfoSection>
      <InfoSection>
        <h1>Comprador</h1>
        <p>
          Nome: João da Silva Sauro <br /> CPF: 123.456.789-10
        </p>
      </InfoSection>
      <Button>
        <button>Voltar pra Home</button>
      </Button>
    </Page>
  );
}

const Page = styled.div`
  padding: 67px 30px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  button {
    font-family: "Roboto";
    cursor: pointer;
    text-align: center;
    margin-right: 8px;
    width: 225px;
    height: 43px;
    background: #e8833a;
    color: #ffffff;
    border-radius: 3px;
  }
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
    font-weight: 700;
    color: #247a6b;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 30px;
  h1 {
    font-family: "Roboto";
    font-weight: 700;
    font-size: 24px;
    color: #293845;
    margin-bottom: 10px;
  }
  p {
    font-family: "Roboto";
    font-size: 22px;
    color: #293845;
  }
`;
