import styled from "styled-components";

export default function HomePage() {
  return (
    <Page>
      <Text>
        <p>Selecione o filme</p>
      </Text>
      <MoviesContainer>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </MoviesContainer>
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

const MoviesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Movie = styled.div`
  width: 145px;
  height: 209px;
  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin-bottom: 10px;
  padding: 8px;

  img{
    width: 130px;
  }
`;
