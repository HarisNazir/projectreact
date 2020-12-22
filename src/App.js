import React from 'react';
import Tweet from './Tweet';
import './App.css'

function App(){
  return(
    <div className = "app">
      <Tweet name="Haris Nazir" tweet = "Wagwan" likes = "5"></Tweet>
      <Tweet name="Rozerin Baran" tweet = "Hi Luv" likes = "5"></Tweet>
      <Tweet name="Roz Baran" tweet = "Heya" likes = "5"></Tweet>
      <Tweet name="Harrison Nazir" tweet = "Sup" likes = "5"></Tweet>
    </div>
  );
}

export default App;