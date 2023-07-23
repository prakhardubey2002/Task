import './App.css';
import Display from './Components/Display';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
function App() {
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoader(true)
    }, 5000);
  }, [])
  return (
    <div className="App">
      {
        loader && <>
          <Display />
          <Footer />
        </>
      }
      {
        !loader && <>
       <h1>Loading please wait for 5 second</h1> 
        
        </>
      }
    </div>


  );
}

export default App;
