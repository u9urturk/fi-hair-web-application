import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Loading from './components/loading';
import routes from './routes';

function App() {
  const showRoutes = useRoutes(routes)
  const [isLoading, setisLoading] = useState(false)
  const test= ()=>{

    setTimeout(() => {
      setisLoading(true)

    }, 3000);
  }
  useEffect(() => {
    test()

  }, [])
  
  if(isLoading === true) {
    return (
    <div> 
        
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
