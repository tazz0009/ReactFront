import logo from './logo.svg';
import './App.css';
import { useState, userState } from 'react';

function App() {

  const [name, setName] = useState(['김철수', '마이클', '박상수']);

  return (
    <div className="App">
      {name[0]}<br/>
      {name[1]}<br/>
      {name[2]}<br/>
    </div>
  );
}

export default App;
