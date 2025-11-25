import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCrop } from '../services/api';

// Storage and nutrition info helper
const getCropInfo = (cropName) => {
  const name = cropName?.toLowerCase() || '';
  const info = {
    storage: 'Store in a cool, dry place. Keep away from direct sunlight.',
    nutrition: 'Rich in vitamins and minerals. Good source of dietary fiber.',
  };

  if (name.includes('tomato') || name.includes('tomatoes')) {
    return {
      storage: 'Store at room temperature until ripe, then refrigerate. Keep stem-side down.',
      nutrition: 'High in Vitamin C, lycopene, and potassium. Low in calories.',
    };
  }
  if (name.includes('potato') || name.includes('potatoes')) {
    return {
      storage: 'Store in a dark, cool place (7-10°C). Keep away from onions. Do not refrigerate.',
      nutrition: 'Rich in Vitamin C, potassium, and B6. Good source of complex carbohydrates.',
    };
  }
  if (name.includes('onion') || name.includes('onions')) {
    return {
      storage: 'Store in a cool, dry, well-ventilated area. Keep away from potatoes.',
      nutrition: 'Contains antioxidants, Vitamin C, and quercetin. Low in calories.',
    };
  }
  if (name.includes('carrot') || name.includes('carrots')) {
    return {
      storage: 'Remove greens, store in refrigerator crisper. Can last 2-3 weeks.',
      nutrition: 'Excellent source of beta-carotene (Vitamin A), fiber, and antioxidants.',
    };
  }
  if (name.includes('banana') || name.includes('bananas')) {
    return {
      storage: 'Store at room temperature. Refrigerate when ripe to slow ripening.',
      nutrition: 'High in potassium, Vitamin B6, and Vitamin C. Natural energy source.',
    };
  }
  if (name.includes('maize') || name.includes('corn')) {
    return {
      storage: 'Store in a cool, dry place. Best consumed fresh. Can be frozen.',
      nutrition: 'Good source of fiber, Vitamin C, and folate. Contains antioxidants.',
    };
  }

  return info;
};

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
  const cropInfo = getCropInfo(crop.name);

  return (
    <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{crop.name}</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Product Information</h2>
        <p><strong>Status:</strong> {crop.status}</p>
        <p><strong>Quantity Available:</strong> {quantity} kg</p>
        <p><strong>Price per kg:</strong> ${price}</p>
        <p><strong>Description:</strong> {crop.description || 'No description provided.'}</p>
        {crop.farmer_name && <p><strong>Farmer:</strong> {crop.farmer_name}</p>}
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0f8ff', borderRadius: '8px' }}>
        <h2>📦 Storage Tips</h2>
        <p>{cropInfo.storage}</p>
      </div>

      <div style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f0fff0', borderRadius: '8px' }}>
        <h2>🥗 Nutrition Information</h2>
        <p>{cropInfo.nutrition}</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Link to="/dashboard" style={{ marginRight: '10px' }}>← Back to Dashboard</Link>
      </div>
    </section>
  );
};

export default CropDetails;

