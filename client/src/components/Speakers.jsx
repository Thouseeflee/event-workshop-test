import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
function Speakers({speakerOnChange}) {
         
    const [inputFields, setInputFields] = useState([
        {id: uuidv4(), name: "" , about: ""}
    ])

    useEffect(() => {
      speakerOnChange(inputFields)
    },[inputFields])

    const handleChangeInput = (id, event) => {
        const newInput = inputFields.map(i => {
            if(id === i.id){
                i[event.target.name] = event.target.value
            }
            return i
        })
        setInputFields(newInput)
    }
    const addInputFields = () => {
        setInputFields([...inputFields, { id: uuidv4(),  name: '', about: '' }])
      }

      const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
      }
    return (
        <>
           
            <div className='speakers'>
            <h6>ABOUT THE SPEAKERS</h6>
            <h5>Mention the few key points about the speaker that are relevent to the topic, To create interest in the event</h5>
       {inputFields.map((inputField => (

           <div className='container' key={inputField.id}>
                <div className="cards">
                    <div className='box'>
                        IMG
                </div>
              <div className='speaker'>
                  <h3>
                    <input type="text" name='name' value={inputField.name} className=""
                   onChange={event => handleChangeInput(inputField.id, event)}  placeholder='NAME OF THE SPEAKER' /></h3>
                  <h5>
                    <input type="text" className="" name="about" value={inputField.about} 
                    onChange={event => handleChangeInput(inputField.id, event)}  placeholder='About The Speaker' /></h5>
                <button className="btn btn-danger " onClick={() => handleRemoveFields(inputField.id)}>Delete</button>
              </div>
                </div>
            </div>
       )))}
           
        <button className='btn btn-primary' onClick={addInputFields}>Add Speakers</button>

        </div>
        </>
    )
}

export default Speakers
