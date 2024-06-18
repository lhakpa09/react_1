import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import AboutUs from '../pages/about_us';
import Contact from '../pages/contact';

function ConditionalRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default ConditionalRoute;