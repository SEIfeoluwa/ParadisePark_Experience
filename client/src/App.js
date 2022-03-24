import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Read from './pages/Read'
import Review from './pages/Review'
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Landing /> }/>
        <Route path='/review' element={ <Read />} />
        <Route path='/read' element={ <Review /> } />
      </Routes>  
    </div>
  );
}

export default App;
