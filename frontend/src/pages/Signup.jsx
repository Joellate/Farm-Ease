import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../services/api';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'farmer' });
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
      await register(form);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to create account.');
    }
  };

  return (
    <section>
      <h1>Create FarmEase Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          Password
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </label>
        <label>
          Role
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="farmer">Farmer</option>
            <option value="buyer">Buyer</option>
          </select>
        </label>
        <button type="submit">Sign up</button>
        {error && <p>{error}</p>}
      </form>
      <p>
        Already have an account? <Link to="/">Log in</Link>
      </p>
    </section>
  );
};

export default Signup;

