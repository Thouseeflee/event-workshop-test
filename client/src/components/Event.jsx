import {useState} from 'react'

function Event() {
    const [info, setInfo] = useState('')
    return (
        <div className='event'>
            <h6 className=''>ABOUT THE EVENT</h6>
            <h5>What is the event going to be about? What should people expect</h5>
            <h3><input type="text" className="borderless-input" value={info} onChange={(e => setInfo(e.target.value))} placeholder='some basic information about this event' /></h3>
        </div>
    )
}

export default Event
