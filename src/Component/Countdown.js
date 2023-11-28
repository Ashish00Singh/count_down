import props from 'react'

export default function Countdown(props) {
    
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
        <label value={0}></label>
        </div>
    </div>
    <div className='col-sm-4' >
        <div style={{backgroundColor:'blue', height: '250px', width: '200px'}}>
        <h1>Minuter</h1>
        <p>{props.Menutes}</p>
        </div>
    </div>
    <div className='col-sm-4' >
        <div style={{backgroundColor:'blue', height: '250px', width: '200px'}}>
            <h1>Sceconds</h1>
        <p id='op'>{props.Seconds}</p>
        </div>
    </div>

    </div></center>
    
    </>
  );
}
 