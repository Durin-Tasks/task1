import { Event, Header } from './containers';
import { EventFlag, GoToTop } from './components'

import './App.css';

import events from './Datas/events';

function App() {
  return (
    <div className="App" id='app'>
      <Header />
      <EventFlag />
      <div>
        {events.map((event, index) => (
          <Event { ...event } key={`event-${index}`}/>
        ))}
      </div>
      <GoToTop />
    </div>
  );
}

export default App;
