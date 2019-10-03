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
          <p className="Banner-text">Our goal is to provide a context for meaningful connections around good food and thoughtful, life-giving conversations. <a href="#about-us">Learn more.</a></p>
          
        </div>
        <h2>Schedule</h2>
        {Object.keys(events).map((month) => {
          return (
            <div>
              <h3 className="Month">{month}</h3>
              <ul className="Events">
                {events[month].map(event => {
                  return <Event {...event} key={event.date} />
                })}
            </ul>
          </div>
          );
        })}
        <div className="Banner Banner--about-us">
          <div className="Banner-fade"></div>
          <p className="Banner-text">About 20 for 20's</p>
        </div>
        <div className="AboutUs">
          <h2 id="about-us">What’s this all about?</h2>

          <p>Simply put, our tagline says we’re about, “Pursuing Community in the Way of Jesus”.</p>

          <p>What that means for us is that we desire to create a place and a context to gather together as young adults to explore what it means to live the “good life” properly understood. Jesus said, “I came so that they may have life and have it abundantly”.  20 for 20’s seeks to engage in a series of sincere and thoughtful discussions as we explore this ‘way’ of Jesus.</p>

          <h2>What our gatherings look like</h2>

          <p>Our gatherings are pretty simple. We meet in a lovely home, we gather around a table/s and enjoy a good meal together and we discuss what we’re thinking and learning about over the last week. Our discussions are based around podcasts we listen to during the week on our own time.</p>

          <p>We want our gatherings to be about authentic community, that is, real conversations…honest, transparent, and a place where substantive friendships can be built and flourish.  We want to talk about the stuff of life, deal with hard questions we may have all in a safe environment as we seek to work it out together.</p>

          <p>If all this sounds interesting and inviting to you, we would love for you to join us!</p>

          <h2>When does this all happen?</h2>

          <p>Tuesday evenings from 6:30 to around 9:00</p>

          <h2 >Where do we meet?</h2>

          <p>We are currently meeting in a home in Newport Beach (Big Canyon) at 26 Burning Tree, Newport Beach, CA 92660 (The Vance home).</p>
        </div>
        <div className="Banner Banner--contact">
          <div className="Banner-fade"></div>
          <p className="Banner-text">
            Interested? {''}
            We'd love to have you.
            Email us at <a href="mailto:20s@gracefellowshipchurch.org">20s@gracefellowshipchurch.com</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
