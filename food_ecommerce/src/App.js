import './App.css';
import Home from './area_Adm/Home';
import { Routes, Route } from 'react-router-dom';
import Tipo from './area_Cliente/Tipo';
import Sabores from './area_Cliente/Sabores';

function App() {

  return (
    <div className="App">
      <>
        <Routes>

          <Route exact path='/' element={<Home/>}/>
          <Route path='/tipo' element={<Tipo/>}/>
          <Route path='/pastel/:id?' element={<Sabores/>}/>

        </Routes>
      </>

    </div>
  );
}

export default App;
