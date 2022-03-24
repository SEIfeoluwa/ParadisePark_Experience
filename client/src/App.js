import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Read from './pages/Read'
import Review from './pages/Review'
import './styles/App.css';


const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route index element={ <Landing /> }/>
        <Route path='/review' element={ <Read />} />
        <Route path='/read' element={ <Review /> } />
      </Routes>  
    </div>
  );
}

export default App;
