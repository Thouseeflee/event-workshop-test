import {useState} from 'react'

function Speakers() {
         
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')

    return (
        <>
        <div className='speakers'>
            <h6>ABOUT THE SPEAKERS</h6>
            <h5>Mention the few key points about the speaker that are relevent to the topic, To create interest in the event</h5>

            <div className='container'>
                <div className="cards">
                <div className='box'>
                    IMG
                </div>
              <div className='speaker'>
                  <h3><input type="text" value={name} className="" onChange={(e) => setName(e.target.value)} placeholder='NAME OF THE SPEAKER' /></h3>
                  <h5><input type="text" className="" value={about} onChange={(e) => setAbout(e.target.value)} placeholder='About The Speaker' /></h5>
              </div>
                </div>
            </div>


        </div>
        </>
    )
}

export default Speakers
