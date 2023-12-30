import './App.css';
import Main from './components/Main/Main';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
             <Route path='/' element={<Main/>}/>
             <Route path='/Dashboard' element={<Dashboard/>}/>
         </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
