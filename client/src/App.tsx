import React from 'react';
import './App.css';


import { useAuth0 } from "@auth0/auth0-react"
import Navigation from './components/Nav'

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
