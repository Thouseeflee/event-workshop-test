import {useState, useEffect} from 'react'

function JoiningInfo({joiningInfoOnChange}) {
    const [joiningInfo, setJoiningInfo] = useState('')
    useEffect(() => {
       joiningInfoOnChange(joiningInfo)
    },[joiningInfo])
    return (
        <div className='event'>
            <h6 className=''>JOINING INFO  (optional)</h6>
            <h5>Share links to the event or live stream</h5>
            <h4><input type="text" className="borderless-input" value={joiningInfo} onChange={(e => setJoiningInfo(e.target.value))} placeholder='Write here' /></h4>
        </div>
    )
}

export default JoiningInfo
