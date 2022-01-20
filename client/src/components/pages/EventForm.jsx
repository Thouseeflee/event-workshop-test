import {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



import Navbar from '../layout/Navbar'
import Head from "../Head";
import Event from "../Event";
import Speakers from "../Speakers";
import Moderator from '../Moderator';
import Resources from '../Resources';
import JoiningInfo from '../JoiningInfo';
import OrganiserTags from '../OrganiserTags';

function EventForm() {

    const [head, setHead] = useState([]);
    const [info, setInfo] = useState('');
    const [speakers, setSpeaker] = useState([])
    const [moderator, setModerator] = useState([])
    const [joiningInfo, setJoiningInfo] = useState('')
    const [resource, setResource] = useState('')
    const [organise, setOrganise] = useState('')
    const [tag, setTag] = useState('')
    
    const navigate = useNavigate()
    const onSubmit = async (e) => {
      e.preventDefault()
      const {title, link, date, fromTime, toTime} = head
      console.log("Triggering to backend");
      navigate("/events")
        await axios.post('http://localhost:3001/post', {
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
    }

    return (
        <div className='App'>
            <Navbar onSubmit={onSubmit}/>
      <Head head={head} onHeadChange={setHead}  />
      <Event infos={info} onInfoChange={setInfo} />
      <Speakers speakerOnChange={setSpeaker}/>
      <Moderator moderatorOnChange={setModerator}/>
      <Resources resourceOnChange={setResource}/>
      <JoiningInfo joiningInfoOnChange={setJoiningInfo}/>
      <OrganiserTags organiseOnChange={setOrganise} tagOnChange={setTag}/>
        </div>
    )
}


export default EventForm
