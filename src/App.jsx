
import './App.css'

import Spline from '@splinetool/react-spline';

import { useEffect ,useState} from 'react';
import DotLoader from "react-spinners/DotLoader";


const App = () => {
  const[loading,setloading]=useState(false)
  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(true)
    

    },8000)

  },[])
  return (
    <div>
      {
        loading?
           <div className="container">
       
           <div className="spline-design"> 
           <Spline scene="https://prod.spline.design/EIJWwdyEQzGOpaFf/scene.splinecode" />






  










           <DotLoader
       
        loading={loading}
        color={'#1c69db'}
       
        size={110}
        
      />
            

            




</div>
        <div className="loader">
       
          </div>
        
     
      </div>:<div>hello</div>

      }
   
      
     

   
      
    </div>
  )
}

export default App
