const DisciplineFilter = () => {
  return (
    <div className="discipline-tape">
      <p>
        <input type="checkbox" id="disc-rob" className="discipline-toggle" hidden />
        <label htmlFor="disc-rob" className="discipline-link top-left-bott-right" style={{"--line-length": "100%"}}>
          Robotics
        </label>
        <span className="pipe">|</span>
        
        <input type="checkbox" id="disc-ai" className="discipline-toggle" hidden />
        <label htmlFor="disc-ai" className="discipline-link double-line-centre" style={{"--line-length": "100%"}}>
          AI/ML &amp; Computer Vision
        </label>
        <span className="pipe">|</span>
        
        <input type="checkbox" id="disc-elec" className="discipline-toggle" hidden />
        <label htmlFor="disc-elec" className="discipline-link top-right-bott-left" style={{"--line-length": "100%"}}>
          Electronics
        </label>
      </p>
    </div>
  );
};

export default DisciplineFilter;