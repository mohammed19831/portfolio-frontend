const ThemeToggle = () => {
  return (
    <>
      <input type="checkbox" id="theme-toggle" className="theme-toggle" hidden />
      <label htmlFor="theme-toggle" className="theme-toggle-label" aria-label="Toggle light/dark theme">
        <i className="fas fa-moon"></i>
        <i className="fas fa-sun"></i>
      </label>
    </>
  );
};

export default ThemeToggle;