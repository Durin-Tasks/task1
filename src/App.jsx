import { Event } from './containers';
import { EventFlag } from './components'

import './App.css';

import events from './Datas/events';

function App() {
  return (
    <div className="App">
      <EventFlag />
      <div>
        {events.map((event, index) => (
          <Event { ...event } key={`event-${index}`}/>
        ))}
      </div>
    </div>
  );
}

export default App;
