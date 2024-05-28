import logo from './logo.svg';
import './App.css';

function App() {
  let title = '강남 우동 맛집zz';
  
  return (
    <div className="App">
      <div>
        <h4 className="black-nav" style={{color:'red', fontSize:'50px'}}>it's blog</h4>
      </div>
      <h4>{ title }</h4>
    </div>
  );
}

export default App;
