import './NewsletterModal.css';

// eslint-disable-next-line react/prop-types
const NewsletterModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>x</button>
        <h2>Subscribe to our Newsletter</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterModal;
