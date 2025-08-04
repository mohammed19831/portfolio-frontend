import NDAInput from './NDAInput';
import DisciplineFilter from './Filters/DisciplineFilter';
import IndustryFilter from './Filters/IndustryFilter';

const Header = () => {
  return (
    <header>
      <label htmlFor="toggle-input" className="toggle-label">
        <h1>
          <span className="full-name">Rantilini S. Samaratunga</span>
          <span className="short-name">Rantilini S.</span>
          <span className="shortest-name">Rantilini</span>
        </h1>
      </label>
      <input type="checkbox" id="toggle-input" className="toggle-checkbox" />
      <NDAInput />
      <DisciplineFilter />
      <IndustryFilter />
      <a href="https://www.linkedin.com/in/rantilini" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
    </header>
  );
};

export default Header;