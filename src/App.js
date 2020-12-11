import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="*"><Error/></Route>
      </Switch>
      </div>
      </BrowserRouter>
  );
}

export default App;
