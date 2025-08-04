const IndustryFilter = () => {
  return (
    <div className="industry-tape">
      <span className="animated-text">
        <input type="checkbox" id="ind-health" className="industry-toggle" hidden />
        <label htmlFor="ind-health" className="industry-link">Healthcare</label>

        <input type="checkbox" id="ind-surg" className="industry-toggle" hidden />
        <label htmlFor="ind-surg" className="industry-link">Surgery</label>

        <input type="checkbox" id="ind-metro" className="industry-toggle" hidden />
        <label htmlFor="ind-metro" className="industry-link">Metrology</label>

        <input type="checkbox" id="ind-agri" className="industry-toggle" hidden />
        <label htmlFor="ind-agri" className="industry-link">Agriculture</label>

        <input type="checkbox" id="ind-xr" className="industry-toggle" hidden />
        <label htmlFor="ind-xr" className="industry-link">AR/VR</label>
      </span>
    </div>
  );
};

export default IndustryFilter;