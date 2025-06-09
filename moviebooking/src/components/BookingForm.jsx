// src/components/BookingForm.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', mobile: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 1000000);
    navigate('/confirmation', { state: { ...form, bookingId } });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px' }}>
      <h3>Book Your Seat</h3>
      <input name="name" placeholder="Enter Your Name" required onChange={handleChange} /><br /><br />
      <input name="email" placeholder="Enter Your Email" required onChange={handleChange} /><br /><br />
      <input name="mobile" placeholder="Enter Your Mobile No." required onChange={handleChange} /><br /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;
