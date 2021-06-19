import React from 'react';
import './App.css';
import LoggedInLanding from "./views/LoggedInLanding"
import LoggedOutLanding from "./views/LoggedOutLanding"
import Loading from './components/Loading'

import { useAuth0 } from "@auth0/auth0-react"
import Navigation from './components/Nav'

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="App">
        <Loading />
      </div>
    )
  }
  return (
    <div className="App">
      <Navigation />
      {isAuthenticated ? <LoggedInLanding /> : <LoggedOutLanding />}
    </div>
  );
}

export default App;
