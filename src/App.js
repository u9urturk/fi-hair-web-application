import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/loading';
import Home from './pages/Home';

function App() {
  const [isLoading, setisLoading] = useState(false)
  const test= ()=>{
    //console.log(isLoading)

    setTimeout(() => {
      setisLoading(true)

      console.log(isLoading)
    }, 3000);
  }

  useEffect(() => {
    test()

  }, [])
  
  if(isLoading === true) {
    return (
    <div className='min-w-[300px] h-screen overflow-hidden'> 
        
        <Home></Home>
       
    </div>
  )}else{

    return(
      <div className=''>
        <Loading></Loading>
      </div>
    )
  }
}

export default App;
