import './App.css';
import React, {useState} from 'react'
import ColorButton from './ColorButton';
import Counter from './Counter';



function App() {
  
//Brain Practice exercise while teaching myself hooks

  const [greeting, setGreeting] = useState(0)
  const [isAbove, setBool] = useState(false)
  const [number, randomNumber] = useState(null)
  const [color, randomColor] = useState('grey')


  let counter = () => {
      if( isAbove === true){
      setGreeting(greeting - 1)
        if(greeting <= 1) {
          setBool(false)
        }
      } else if(isAbove === false) {
        setGreeting(greeting + 1)
        if(greeting >= 9) {
          setBool(true)
        }
      }  
  }

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
    <Counter isAbove={isAbove} greeting={greeting} counter={counter}/>
    <ColorButton color={color} number={number} randomized={randomized}/>
    </>
  );
}

export default App;
