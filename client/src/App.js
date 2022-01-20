import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Navbar from "./components/layout/Navbar";
import Head from "./components/Head";
import Event from "./components/Event";
import Speakers from "./components/Speakers";
import Moderator from './components/Moderator';
import Resources from './components/Resources';
import JoiningInfo from './components/JoiningInfo';
import OrganiserTags from './components/OrganiserTags';

import EventList from './components/pages/EventList';

function App() {
    const [head, setHead] = useState([]);
    const [info, setInfo] = useState('');
    const [speakers, setSpeaker] = useState([])
    const [moderator, setModerator] = useState([])
    const [joiningInfo, setJoiningInfo] = useState('')
    const [resource, setResource] = useState('')
    const [organise, setOrganise] = useState('')
    const [tag, setTag] = useState('')

    const onSubmit = async (e) => {
      e.preventDefault()

      const {title, link, date, fromTime, toTime} = head
      console.log("Triggering to backend");
     try {
      const res = await axios.post('http://localhost:3001/post', {
        title,
        link,
        date,
        fromTime,
        toTime,
        info,
        speakers,
        moderator,
        joiningInfo,
        resource,
        organise,
        tag
      }).then(() => {
        console.log("success");
      }).catch((e) => {
        console.log(e);
      })
     } catch (error) {
       console.log(error);
     }
    }
  return (
    <div className="App">
      <Router>
      <Navbar onSubmit={onSubmit}/>
      <Head head={head} onHeadChange={setHead}  />
      <Event infos={info} onInfoChange={setInfo} />
      <Speakers speakerOnChange={setSpeaker}/>
      <Moderator moderatorOnChange={setModerator}/>
      <Resources resourceOnChange={setResource}/>
      <JoiningInfo joiningInfoOnChange={setJoiningInfo}/>
      <OrganiserTags organiseOnChange={setOrganise} tagOnChange={setTag}/>
      <Routes>
        <Route path="/events" element={<EventList />}></Route>
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
