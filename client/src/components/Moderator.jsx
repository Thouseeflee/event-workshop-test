import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'


function Moderator({moderatorOnChange}) {
         
    const [inputFields, setInputFields] = useState([
        {id: uuidv4(), moderatorName: "" , moderatorAbout: ""}
    ])

    useEffect(() => {
        moderatorOnChange(inputFields)
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
        setInputFields([...inputFields, { id: uuidv4(),  moderatorName: '', moderatorAbout: '' }])
      }
    
      const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
      }

    return  (
        <>
               
            <div className='speakers'>
            <h6>ABOUT THE MODERATOR  (optional)</h6>
            <h5>Mention the few key points about the moderator</h5>
             
            {inputFields.map((inputField => (

<div className='container' key={inputField.id}>
     <div className="cards">
         <div className='box'>
             IMG
     </div>
   <div className='speaker'>
       <h3>
         <input type="text" name='moderatorName' value={inputField.moderatorName} className=""
        onChange={event => handleChangeInput(inputField.id, event)}  placeholder='Name of the Moderator' /></h3>
       <h5>
         <input type="text" className="" name="moderatorAbout" value={inputField.moderatorAbout} 
         onChange={event => handleChangeInput(inputField.id, event)}  placeholder='About The Moderator' /></h5>
   <button className="btn btn-danger " onClick={() => handleRemoveFields(inputField.id)}>Delete</button>
   </div>

     </div>
 </div>
)))}

<button className='btn btn-primary' onClick={addInputFields}>Add Moderator</button>
          
        
        </div>
        </>
    ) 
    
}

export default Moderator
