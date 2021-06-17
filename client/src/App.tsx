import React from 'react';
import './App.css';
import LoggedInLanding from "./views/LoggedInLanding"
import LoggedOutLanding from "./views/LoggedOutLanding"

import { useAuth0 } from "@auth0/auth0-react"
import Navigation from './components/Nav'

function App() {

  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <Navigation />
        { isAuthenticated ? <LoggedInLanding /> : <LoggedOutLanding /> }
    </div>
  );
}

export default App;
