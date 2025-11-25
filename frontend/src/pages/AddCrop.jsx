import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCrop } from '../services/api';

const AddCrop = () => {
  const [form, setForm] = useState({
    userId: '',
    name: '',
    description: '',
    quantity: '',
    pricePerKg: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const payload = {
        ...form,
        userId: Number(form.userId),
        quantity: Number(form.quantity),
        pricePerKg: Number(form.pricePerKg),
      };
      await createCrop(payload);
      navigate('/dashboard');
    } catch (_err) {
      setError('Unable to add crop.');
    }
  };

  return (
    <section>
      <h1>Add Crop</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Farmer ID
          <input type="number" name="userId" value={form.userId} onChange={handleChange} required />
        </label>
        <label>
          Crop Name
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Description
          <textarea name="description" value={form.description} onChange={handleChange} />
        </label>
        <label>
          Quantity (kg)
          <input type="number" name="quantity" value={form.quantity} onChange={handleChange} required />
        </label>
        <label>
          Price per Kg
          <input type="number" name="pricePerKg" value={form.pricePerKg} onChange={handleChange} required />
        </label>
        <button type="submit">Save</button>
        {error && <p>{error}</p>}
      </form>
    </section>
  );
};

export default AddCrop;

