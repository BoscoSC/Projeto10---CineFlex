import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./global";
import Header from "./Header";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element="" /> {/* HomePage */}
        <Route path="/" element="" /> {/* MoviePage */}
        <Route path="/" element="" /> {/* SeatsPage */}
        <Route path="/" element="" /> {/* SucessPage */}
      </Routes>
    </BrowserRouter>
  );
}
