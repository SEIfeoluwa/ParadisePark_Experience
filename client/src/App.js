import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Read from './pages/Read'
import Review from './pages/Review'
import axios from 'axios'
import './styles/App.css';


const App = () => {
  const makeApiCall = async () => {
    let res = await axios.get('http://localhost:3001/reviews')
    console.log(res.data.reviews)
  }
  makeApiCall();
  return (
    <div className="App">
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/review' element={<Read />} />
        <Route path='/read' element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
