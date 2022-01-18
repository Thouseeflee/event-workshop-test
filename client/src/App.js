import {useState} from 'react'
import axios from 'axios'

import Navbar from "./components/layout/Navbar";
import Head from "./components/Head";
import Event from "./components/Event";
import Speakers from "./components/Speakers";

function App() {
    const [head, setHead] = useState([]);
       
    
    const onSubmit = async () => {
      const {title, link, date, fromTime, toTime} = head
      console.log("Triggering to backend");
      await axios.post('http://localhost:3001/post', {
        title,
        link,
        date,
        fromTime,
        toTime
      }).then((res) => {
        console.log("success", res);
      }).catch((e) => {
        console.log(e);
      })
    }
  return (
    <div className="App">
      <Navbar onSubmit={onSubmit}/>
      <Head head={head} onHeadChange={setHead}  />
      <Event />
      <Speakers />
    </div>
  );
}

export default App;
