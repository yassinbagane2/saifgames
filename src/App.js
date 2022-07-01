import './index.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';



function App() {
  const [click,setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
  return <div className='main'> 
    <Navbar onClick = {handleClick} click={click}/>
    {!click && <Content click={click}/>}
    
    </div>
    

  
}

export default App;
