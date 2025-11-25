import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchCrops } from '../services/api';

// Main dashboard - shows all available crops
const Dashboard = () => {
  const [crops, setCrops] = useState([]);
  const [error, setError] = useState('');

  // Load crops when component mounts
  useEffect(() => {
    const loadCrops = async () => {
      try {
        const { data } = await fetchCrops();
        setCrops(data);
      } catch (err) {
        setError('Unable to load crops.');
      }
    };

    loadCrops();
  }, []);

  return (
    <section>
      <header>
        <h1>FarmEase Dashboard</h1>
        <Link to="/crops/new">Add Crop</Link>
      </header>
      {error && <p>{error}</p>}
      <ul>
        {crops.map((crop) => (
          <li key={crop.id}>
            <Link to={`/crops/${crop.id}`}>{crop.name}</Link> — {crop.status}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Dashboard;

