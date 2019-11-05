import React from 'react';
import { BrowserRouter as Router, 
  Route,
  Link,
  Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Random from './Random';
import Catagories from './Categories';


export default function App() {
  const [state, setState] = React.useState('');

  return (
    <Router>
      <Route path="/" component={Header} />

      <Switch>
        
        <Route path="/characters">
          <Catagories
            category={state}
          />
        </Route>

        <Route exact path="/" component={Random} />
      </Switch>

      <Route path="/">
        
        <p>type a category like Main characters or Monster of the Week or characters like Dana Scully</p>
        <input type='text' onChange={({ target }) => {
          setState(target.value); } }></input>
        <Link to="/characters">Go</Link>
      </Route>
      <Route path="/" component={Footer} />
    </Router>
  );
}
