import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
function EventList() {
    const [eventList, setEventList] = useState([])

    useEffect(() => {
         const list = axios.get('http://localhost:3001/')
         .then((res) => {
           setEventList(res.data)
         })
        },[])
        
    return (
        <div className="App">

            <h1>Events list</h1>
        {eventList.map((val => (
            <div className="card text-center" key={val._id}>
  <div className="card-body">
    <h5 className="card-title">{val.title}</h5>
    <p className="card-text">Info : {val.info}</p>
  </div>
</div>
        )))}
        <Link className='btn btn-primary' to='/'>Create Event</Link>
        </div>
    )
}

export default EventList
