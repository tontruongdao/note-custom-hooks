import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState("")
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
