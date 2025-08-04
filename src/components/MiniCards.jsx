import '../styles/miniCards.css';

const MiniCards = () => {
  return (
    <div className="svg-container">
      <svg width="200" height="250" xmlns="http://www.w3.org/2000/svg">
        {/* Vertical line */}
        <line x1="100" y1="0" x2="100" y2="29" stroke="black" strokeWidth="1.0"/>
      
        {/* Horizontal upper left line */}
        <line x1="15" y1="25" x2="100" y2="32.5" stroke="black" strokeWidth="1.5"/>

        {/* Left vertical line */}
        <line x1="15" y1="30" x2="15" y2="75" stroke="black" strokeWidth="1.5"/>
      
        <line x1="0" y1="80" x2="30" y2="80" stroke="black" strokeWidth="1.5"/>

        {/* Vertical line */}
        <line x1="100" y1="0" x2="100" y2="29" stroke="black" strokeWidth="0.5"/>

        {/* Horizontal upper right line */}
        <line x1="100" y1="32.5" x2="185" y2="40" stroke="black" strokeWidth="1.5"/>
 
        {/* Right vertical line */}
        <line x1="185" y1="45" x2="185" y2="165" stroke="black" strokeWidth="1.5"/>
        
        <line x1="170" y1="170" x2="200" y2="170" stroke="black" strokeWidth="1.5"/>
      </svg>
      <div className="mini-card contract">
        <a href="https://www.remidus.com/#contact" target="_blank" rel="noopener noreferrer">
          Contract/Consult <span className="tag">Outside [IR35]</span>
        </a>
      </div>
      <div className="mini-card employ">
        <a href="https://www.linkedin.com/in/rantilini" target="_blank" rel="noopener noreferrer">
          Employ/Hire<span className="tag">[Inside IR35]</span>
        </a>
      </div>
    </div>
  );
};

export default MiniCards;