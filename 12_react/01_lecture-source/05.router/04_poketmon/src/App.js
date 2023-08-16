import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layouts/Layout.js';
import Main from './pages/Main';
import About from './pages/About.js';
import PoketmonInfo from "./pages/PokentmonInfo.js";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path="main" element={<Main/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="poketmoninfo" element={<PoketmonInfo/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
