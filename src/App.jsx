import { useContext } from 'react';

import { Event, Header } from './containers';
import { EventFlag, GoToTop } from './components'

import './App.css';
import { EventsContext } from './context';

function App() {
  const { allEvents } = useContext(EventsContext)
  return (
    <div className="App" id='app'>
      <Header />
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
