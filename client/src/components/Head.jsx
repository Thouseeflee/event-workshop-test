import {useState, useCallback, useEffect} from 'react' 

function Head({head, onHeadChange}) {
    const [title, setTitle] = useState('')
    const [link, setLink] = useState('')
    const [date, setDate] = useState('')
    const [fromTime, setFromTime] = useState('')
    const [toTime, setToTime] = useState('')

    console.log();
    const h = { title, link, date, fromTime, toTime}

    useEffect(() => {
          onHeadChange(h)
    },[title,link,date,fromTime,toTime])
  
    return (
        <>
        <div className="head">
            <h5>Event workshop</h5>
        <h1><input className="borderless-input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter a short, Descriptive Title" type="text" name="" id="" /></h1>
        <p>
            <input type="text" value={link} className="borderless-input" onChange={(e) => setLink(e.target.value)} placeholder="paste or enter registration link here"/>
        </p>
        </div>

            <h6>WHEN</h6>
        <div className='date-time'>
            <div>
                <label htmlFor="date">Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)}   name="" id="date" />
            </div>
            <div>
            <label htmlFor="from">from</label>
            <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value) } name="" id="from" />
            </div>
            <div>
            <label htmlFor="to">To</label>
            <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} name="" id="to" />
            </div>
        </div>
        </>
    )
}

export default Head
