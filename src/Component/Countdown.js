import React from 'react'
import props from 'react'

export default function Countdown() {
  return (
    <>
    <center>
        <h1>
            Count-Down
        </h1>
    <div className='row'>
    <div className='col-sm-4' >
        <div style={{backgroundColor:'blue', height: '250px', width: '200px'}}>
        <h1>Hour</h1>
        <p> {props.type}</p>
        </div>
    </div>
    <div className='col-sm-4' >
        <div style={{backgroundColor:'blue', height: '250px', width: '200px'}}>
        <h1>Minuter</h1>
        </div>
    </div>
    <div className='col-sm-4' >
        <div style={{backgroundColor:'blue', height: '250px', width: '200px'}}>
        <h1>Second</h1>
        </div>
    </div>

    </div></center>
    
    </>
  )
  const as =type ="ashsihs";
}
 