
import './App.css'
import image from './robowars_logo.gif'

import { useEffect ,useState} from 'react';
import BarLoader from "react-spinners/BarLoader";


const App = () => {
  const[loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(true)
    

    },8000)

  },[])
  return (
    <>
    <img src={image}></img>
    <div className="loader">
    <BarLoader
       
        
      
        size={1000}
       
      />

    </div>
    

    </>
    
  )
}

export default App
