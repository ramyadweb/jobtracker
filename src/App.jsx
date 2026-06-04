import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import AddJob from './pages/AddJob';
import Jobs from './pages/Jobs';
// import Profile form './pages/Profile';

function App() {
  return(
    
      <Routes>
      
       <Route path="/" element={<Home /> } />

       <Route path="/" element={<AddJob />} /> 
       <Route path="/" element={<Jobs /> } />

      </Routes>
    
  );
}
export default App;


 