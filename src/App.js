import './App.css';
import React, {useState} from 'react'
import ColorButton from './Components/ColorButton/ColorButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './Components/Counter/Counter';

function App() {
  
//Brain Practice exercise while teaching myself hooks

 /*  const [buttonText, setText] = useState(0)
  const [isAbove, setBool] = useState(false) */
  const [number, randomNumber] = useState(null)
  const [color, randomColor] = useState('grey')

  let randomNumberGenerator = () => {
    return(Math.floor(Math.random() * 256)) 
  }

  let randomized = () => {
    let results = `${randomNumberGenerator()}, ${randomNumberGenerator()}, ${randomNumberGenerator()}`
    randomNumber(results)
    randomColor(`rgb(${results})`)
  }
  
 
  return (
    <>
      <Counter/>
      <ColorButton color={color} number={number} randomized={randomized}/>
    </>
  );
}

export default App;
