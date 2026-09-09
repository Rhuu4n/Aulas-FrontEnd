import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Relogio from './components/relogio';
import MsgLimit from './components/msg_limit';
import Aviso from './components/aviso';
import Titulo from './components/titulo';
import Satisfacao from './components/satisfacao';
import Evento from './components/evento';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <div className="App">
              <header className="App-header">

                <h1>Exercícios Faculdade SENAI Antonio Adolpho Lobbe</h1>
                <Link to="/relogio" className="botao">Relógio</Link>
                <Link to="/msg_limit" className="botao">Limite de Curtidas</Link>
                <Link to="/aviso" className="botao">Aviso com temporizador</Link>
                <Link to="/titulo" className="botao">Título Dinâmico da Página</Link>
                <Link to="/satisfacao" className="botao">Formulário de pesquisa de satisfação</Link>
                <Link to="/evento" className="botao">Formulário de inscrição em evento de tecnologia</Link>

              </header>
            </div>
          }/>

    <Route path="/relogio"element={<Relogio />}/>
    <Route path="/msg_limit"element={<MsgLimit />}/>
    <Route path="/aviso"element={<Aviso />}/>
    <Route path="/titulo"element={<Titulo />}/>
    <Route path="/satisfacao"element={<Satisfacao />}/>
    <Route path="/evento"element={<Evento />}/>

  </Routes>
</BrowserRouter>
  );
}

export default App;