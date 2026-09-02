import './App.css';
import Relogio from './components/relogio';
import MsgLimit from './components/msg_limit';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
              
              </header>
            </div>
          }
        />
    <Route path="/relogio"element={<Relogio />}/>

    <Route path="/msg_limit"element={<MsgLimit />}/>

  </Routes>
</BrowserRouter>
  );
}

export default App;
