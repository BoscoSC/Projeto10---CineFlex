import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./global";
import Header from "./Header";
import HomePage from "./HomePage";
import MoviePage from "./MoviePage";
import SeatsPage from "./SeatsPage";
import SucessPage from "./SucessPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage */}
        <Route path="/movie" element={<MoviePage />} /> {/* MoviePage */}
        <Route path="/seats" element={<SeatsPage />} />  {/* SeatsPage */}
        <Route path="/sucess" element={<SucessPage />} />  {/* SucessPage */}
      </Routes>
    </BrowserRouter>
  );
}
