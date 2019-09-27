import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Event.css';
import Event from './Event';
import events from './data/events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        20 for 20's
      </header>
      <main>
      <div></div>
        <h2>Schedule</h2>
        <h3>October</h3>
        <ul className="Events">
            {events.map(event => {
              return <Event {...event} key={event.date} />
            })}
        </ul>
      </main>
    </div>
  );
}

export default App;
