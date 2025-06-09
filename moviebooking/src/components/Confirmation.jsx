// src/components/Confirmation.jsx
import { useLocation, Link } from 'react-router-dom';

const Confirmation = () => {
  const { state } = useLocation();

  if (!state) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>❌ No Booking Found</h2>
        <p>Please complete your booking first.</p>
        <Link to="/">Go Back to Movies</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>✅ Seat Booked!</h2>
      <p><strong>Booking ID:</strong> #{state.bookingId}</p>
      <p><strong>Name:</strong> {state.name}</p>
      <p><strong>Email:</strong> {state.email}</p>
      <p><strong>Mobile:</strong> {state.mobile}</p>
    </div>
  );
};

export default Confirmation;
