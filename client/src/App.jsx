import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="*" element={<div className="text-center mt-20"><h2>404 - Page Not Found</h2></div>} />
    </Routes>
  );
}

export default App;