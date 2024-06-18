import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div onClick={() => navigate('/')}>Home</div>
      <div onClick={() => navigate('/about_us')}>About Us</div>
      <div onClick={() => navigate('/contact')}>Contact</div>
    </nav>
  );
}

export default Navbar;