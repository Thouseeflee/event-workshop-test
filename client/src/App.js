import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EventList from './components/pages/EventList';
import EventForm from './components/pages/EventForm';

function App() {
 
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<EventForm />}></Route>
        <Route path="/events" element={<EventList />}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
