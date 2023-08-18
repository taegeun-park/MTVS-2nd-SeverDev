import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout';
import Main from './pages/Main';
import About from './pages/About';
import PokemonInfo from "./pages/PokemonInfo";
import PokemonDetail from "./pages/PokemonDetail";
import PokemonSearchResult from "./pages/PokemonSearchResult.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='main' element={<Main/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='pokemon'>
              <Route index element={<PokemonInfo/>}/>
              <Route path=':pokemonName' element={<PokemonDetail/>}/>
              <Route path='search' element={<PokemonSearchResult/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
