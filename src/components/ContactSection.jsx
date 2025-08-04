import MiniCards from './MiniCards';
import '../styles/contactSection.css';

const ContactSection = () => {
  return (
    <section className="section" id="contact">
      <div className="contact-icon">
        <i className="fas fa-envelope"></i>
      </div>
      <MiniCards />
    </section>
  );
};

export default ContactSection;