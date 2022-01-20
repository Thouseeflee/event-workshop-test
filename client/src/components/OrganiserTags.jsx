import {useState, useEffect} from 'react'

function OrganiserTags({organiseOnChange, tagOnChange}) {
    const [organiser, setOrganiser] = useState('')
    const [tags, setTags] = useState('')
    useEffect(() => {
       organiseOnChange(organiser)
       tagOnChange(tags)
    },[organiser, tags])
    return (
        <>
        <div className='event'>
            <h6 className=''>ORGANISED BY  (optional)</h6>
            <h5>Name person/s, Organization/s, Workin Group/s, State Network/s that organised the event</h5>
            <h4><input type="text" className="borderless-input" value={organiser} onChange={(e => setOrganiser(e.target.value))} placeholder='Write here' /></h4>
        </div>

        <div className='event'>
            <h6 className=''>TAGS</h6>
            <h4><input type="text" className="borderless-input" value={tags} onChange={(e => setTags(e.target.value))} placeholder='Write here' /></h4>
        </div>
        </>
    )
}

export default OrganiserTags
