import './App.css';
import React from 'react'
import ColorButton from './Components/ColorButton/ColorButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './Components/Counter/Counter';
import CodingNotes from './Components/Notes/CodingNotes'
import InfoTechNotes from './Components/Notes/InfoTechNotes'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav'

function App() {
 
  return (
    <>
    <Router>
      <Nav/>
      <Switch>
        <Route path="/counter" exact component={Counter}/>
        <Route path="/colorbutton" exact component={ColorButton}/>
        <Route path="/codingnotes" exact component={CodingNotes}/>
        <Route path="/infotechnotes" exact component={InfoTechNotes}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;


