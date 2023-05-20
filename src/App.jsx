import { useState } from 'react';

import { Event, Header } from './containers';
import { EventFlag, GoToTop } from './components'

import './App.css';

import events from './Datas/events';

function App() {
  const [allEvents, setAllEvents] = useState(events)
  return (
    <div className="App" id='app'>
      <Header setEvents={setAllEvents} />
      <EventFlag />
      <div>
        {allEvents.map((event, index) => (
          <Event { ...event } key={`event-${index}`}/>
        ))}
      </div>
      <GoToTop />
    </div>
  );
}

export default App;
