import './App.css';
import Home from './area_Adm/Home';
import { Routes, Route } from 'react-router-dom';
import Tipo from './area_Cliente/Tipo';
import Sabores from './area_Cliente/Sabores';
import Quantidade from './area_Cliente/Quantidade';
import Finalizar from './area_Cliente/Finalizar';

function App() {

  return (
    <div className="App">
      <>
        <Routes>

          <Route exact path='/' element={<Home/>}/>
          <Route path='/tipo' element={<Tipo/>}/>
          <Route path='/pastel/:id?' element={<Sabores/>}/>
          <Route path='/quantidade' element={<Quantidade/>}/>
          <Route path='/finalizar' element={<Finalizar/>}/>

        </Routes>
      </>

    </div>
  );
}

export default App;
