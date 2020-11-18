import './App.css';
import React from 'react'
import ColorButton from './Components/ColorButton/ColorButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './Components/Counter/Counter';

function App() {
 
  return (
    <>
      <Counter/>
      <ColorButton/>
    </>
  );
}

export default App;
