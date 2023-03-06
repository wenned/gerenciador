import './App.css';
import Home from './area_Adm/Home';
import { Routes, Route } from 'react-router-dom';
import Tipo from './area_Cliente/Tipo';

function App() {
  return (
    <div className="App">
      <>
        <Routes>

          <Route exact path='/' element={<Home/>}/>
          <Route path='/tipo' element={<Tipo/>}/>

        </Routes>
      </>

    </div>
  );
}

export default App;
