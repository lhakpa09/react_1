import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import ConditionalRoute from './routes/ConditionalRoute';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/*' element={<ConditionalRoute />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
