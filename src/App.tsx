import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Vote from './components/userevents/vote';

function App() {
  const [globalVoteCount]= useState(10)
  return (
    <div className="App">
     <Vote globalVoteCount={globalVoteCount} />
    </div>
  );
}

export default App;
