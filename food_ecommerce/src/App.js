import './App.css';
import Home from './area_Adm/components/Home';
import { Routes, Route } from 'react-router-dom';
import Tipo from './area_Cliente/Tipo';
import Sabores from './area_Cliente/Sabores';
import Quantidade from './area_Cliente/Quantidade';
import Finalizar from './area_Cliente/Finalizar';
import Pedido from './area_Cliente/Pedido';
import Pasteis from './area_Adm/components/Pasteis';
import Pagamento from './area_Cliente/Pagamento';
import Conferencia from './area_Adm/components/Conferencia';

function App() {

  return (
    <div className="App">
      <>
        <Routes>
          {/*AREA CAXAI E PRODUCAO*/}
          
          <Route exact path='/' element={<Home/>}/>

          <Route path='/tipo/:Mesa?/:Operacao?' element={<Tipo/>}/>

          <Route path='/pastel/:id?' element={<Sabores/>}/>
          <Route path='/quantidade/:valores?' element={<Quantidade/>}/>
          
          <Route path='/pedido' element={<Pedido/>}/>
          <Route path='/pagamento/:valor?' element={<Pagamento/>}/>


          <Route path='/finalizar' element={<Finalizar/>}/>
          
          {/* AREA PRODUCAO */}
          <Route path='/pasteis' element={<Pasteis/>}/>
          <Route path='/conferencia' element={<Conferencia/>}/>
          
        </Routes>
      </>

    </div>
  );
}

export default App;
