import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Relogio from './components/relogio';
import MsgLimit from './components/msg_limit';
import Aviso from './components/aviso';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <div className="App">
              <header className="App-header">

                <h1>Exercícios Faculdade SENAI Antonio Adolpho Lobbe</h1>
                <Link to="/relogio" className="botao">Relógio</Link>
                <Link to="/msg_limit" className="botao">Limite de Mensagens</Link>
                <Link to="/aviso" className="botao">Aviso com temporizador</Link>
                
              </header>
            </div>
          }/>

    <Route path="/relogio"element={<Relogio />}/>
    <Route path="/msg_limit"element={<MsgLimit />}/>
    <Route path="/aviso"element={<Aviso />}/>

  </Routes>
</BrowserRouter>
  );
}

export default App;