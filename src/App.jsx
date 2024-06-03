import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TelaPerguntas from './pages/TelaPerguntas/TelaPerguntas';
import TelaPrincipal from './pages/TelaPrincipal/TelaPrincipal';

function App() {
      return (
  <Router>
      <Routes>
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/quiz" element={<TelaPerguntas />} />
      </Routes>
    </Router>
  );
}

export default App;
