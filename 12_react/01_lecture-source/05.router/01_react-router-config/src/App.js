import Main from './pages/Main';
import Menu from './pages/Menu';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

/*
  라우팅 : 어떤 요청을 어디로 안내 및 매핑을 할 것인징를 정해놓고 진행하는 것
  리엑트에서는 요청에 따라 요청 매핑된 컴포넌트를 랜더링한다.

  BrowserRouter : 라우팅이 필요한 컴포넌트를 감싸는 컴포넌트
  Routes : Route들을 묶어주는 단위 컴포넌트
  Route : url 요청 주소와 컴포넌트를 매핑해주는 단위 컴포넌트
*/

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/main" element={<Main/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// 여러개를 export하고싶을때
// export function test() {}

export default App;