import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCrop } from '../services/api';

const CropDetails = () => {
  const { id } = useParams();
  const [crop, setCrop] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadCrop = async () => {
      try {
        const { data } = await fetchCrop(id);
        setCrop(data);
      } catch (_err) {
        setError('Unable to load crop.');
      }
    };

    loadCrop();
  }, [id]);

  if (error) {
    return (
      <section>
        <p>{error}</p>
        <Link to="/dashboard">Back to dashboard</Link>
      </section>
    );
  }

  if (!crop) {
    return (
      <section>
        <p>Loading crop...</p>
      </section>
    );
  }

  const price = crop.price_per_kg ?? crop.pricePerKg ?? 0;
  const quantity = crop.quantity ?? crop.availableQuantity ?? 0;

  return (
    <section>
      <h1>{crop.name}</h1>
      <p>Status: {crop.status}</p>
      <p>Quantity: {quantity} kg</p>
      <p>Price per kg: {price}</p>
      <p>Description: {crop.description || 'No description provided.'}</p>
      <Link to="/dashboard">Back to dashboard</Link>
    </section>
  );
};

export default CropDetails;

