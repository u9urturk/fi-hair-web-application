import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Loading from './components/loading';
import { useSelector } from 'react-redux';
import routes from './routes';

function App() {
  const user = useSelector(state => state.auth.user)
  const showRoutes = useRoutes(routes)
  const [isLoading, setisLoading] = useState(false)
  const test= ()=>{
    //console.log(isLoading)

    setTimeout(() => {
      setisLoading(true)

      //console.log(isLoading)
    }, 3000);
  }
  console.log(user);
  useEffect(() => {
    test()

  }, [])
  
  if(isLoading === true) {
    return (
    <div className='min-w-[300px] h-screen overflow-hidden'> 
        
        {showRoutes}
       
    </div>
  )}else{

    return(
      <div>
        <Loading></Loading>
      </div>
    )
  }
}

export default App;
