import { Route, Routes } from 'react-router-dom';
import './App.css';
import Average from './pages/Average';
import Main from './pages/Main.js';
import Navbars from './layout/Navbars';
import Board from './pages/Board.js';
import Todo from './pages/Todo.js';

const App = () => {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/average" element={<Average />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
};

export default App;
