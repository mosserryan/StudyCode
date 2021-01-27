import './App.css';
import React from 'react'
import ColorButton from './Components/ColorButton/ColorButton';
import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './Components/Counter/Counter';
import CodingNotes from './Components/Notes/CodingNotes'
import InfoTechNotes from './Components/Notes/InfoTechNotes'
import InfoTechQuiz from './Components/Quiz/InfoTechQuiz'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Nav from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Route path="/infotechquiz" exact component={InfoTechQuiz}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;


