import React from 'react';
import './App.scss';
import { Navigation } from './components/Navigation'
import { Field } from './components/Field';
import { Comments } from './components/Comments'
import { PGNViewer } from './components/PGNViewer'




export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       component: (
        <div>
          <Comments />
          <Field />
          <PGNViewer />
        </div>
      ),
    }
  }
  

  render() {

    
    
    return (
      <div className="App">
        <Navigation className="Navigation" />
        <div className="content">  
          {this.state.component}
        </div>
        
        
     </div>
    )
  }
}
