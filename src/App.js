import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import ConditionalRoute from './routes/ConditionalRoute';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <ConditionalRoute />
      </div>
    </Router>
  );
}

export default App;