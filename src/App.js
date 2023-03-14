import './App.css';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Accueil from './pages/acceuil';
import Cours from './pages/cours';
import Professeurs from './pages/Professeurs';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/Acceuil" exact>
              <Accueil />
            </Route>
            <Route path="/cours" exact>
              <Cours />
            </Route>
            <Route path="/Professeurs" exact>
              <Professeurs />
            </Route>
            <Redirect to="/Acceuil"/>
          </Switch>
        </main>
    </Router> 
    </div>
  );
}
export default App;
