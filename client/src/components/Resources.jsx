import {useState, useEffect} from 'react'

function Resources({resourceOnChange}) {
    const [resources, setResources] = useState('')
    useEffect(() => {
       resourceOnChange(resources)
    },[resources])
    return (
        <div className='event'>
            <h6 className=''>READING MATERIALS AND RESOURCES  (optional)</h6>
            <h5>Share the links or document that you think people can/should refer to before the event</h5>
            <h4><input type="text" className="borderless-input" value={resources} onChange={(e => setResources(e.target.value))} placeholder='Write here' /></h4>
        </div>
    )
}

export default Resources
