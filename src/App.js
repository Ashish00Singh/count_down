import './App.css';
import Countdown from './Component/Countdown';
import { useState } from 'react';

function App() {
  const [Seconds, setseconds] = useState(0)
    if(Seconds<=59){
        setTimeout(()=>{
            setseconds(Seconds+1)
        },100);
    }if(Seconds==60){
      clearInterval(id);
    }
    
    const [Min, setMin] = useState(0)
    if(Min<=59){
        setTimeout(()=>{
            setMin(Min+1)
        },61000);
    }
    
  return (
    <div>
      
      <Countdown Seconds={Seconds} Menutes={Min}></Countdown>
    
    </div>
  );
}

export default App;
