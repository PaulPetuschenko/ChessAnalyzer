import React from 'react';
import './App.scss';
import { Navigation } from './components/Navigation'
import { Field } from './components/Field';
import { Comments } from './components/Comments'
import { PGNViewer } from './components/PGNViewer'
import Database from './components/Database';
import Info from './components/Info'
import { Route, HashRouter } from 'react-router-dom';


const Board = () =>(
  <div>
    <Comments />
    <Field />
    <PGNViewer />
  </div>
)


export default class App extends React.Component {

  

  render() {


    
    return (
    <HashRouter className="App">
      <Navigation className="Navigation" />
      <div className="content">  
        <Route exact path="/" component={Board} />
        <Route path="/database" component={Database} />
        <Route path="/info" component={Info} />
      </div>
        
        
    </HashRouter>
    )
  }
}
