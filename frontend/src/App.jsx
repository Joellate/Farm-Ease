import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import AddCrop from './pages/AddCrop';
import CropDetails from './pages/CropDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/crops/new" element={<AddCrop />} />
      <Route path="/crops/:id" element={<CropDetails />} />
    </Routes>
  </Router>
);

export default App;

