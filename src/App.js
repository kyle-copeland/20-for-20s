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
        <img className="App-logo"alt="20 for 20s" src="/logo.png" />
      </header>
      <main>
        <div className="Panel">
           <p className="Panel-text">Pursuing <span className="u-highlight">community</span> in <span className="u-highlight">the way</span> of <span className="u-highlight">Jesus</span></p>
           <img alt="leaves" className="Panel-image" src="/leaves.jpg"/>
        </div>
        <div className="Banner">
          <div className="Banner-fade"></div>
          <p className="Banner-text">Our goal is to provide a context for meaningful connections around good food and thoughtful, life-giving conversations</p>
        </div>
        <h2>Schedule</h2>
        {Object.keys(events).map((month) => {
          return (
            <div>
            <h3>{month}</h3>
            <ul className="Events">
              {events[month].map(event => {
                return <Event {...event} key={event.date} />
              })}
          </ul>
          </div>
          );
        })}
        
        
        <div className="Banner Banner--contact">
          <div className="Banner-fade"></div>
          <p className="Banner-text">
            Interested?
            We'd love to have you.
            Email us at <a href="mailto:20s@gracefellowshipchurch.org">20s@gracefellowshipchurch.com</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
