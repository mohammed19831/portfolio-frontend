const NDAInput = () => {
  return (
    <span id="fold-down">
      <input 
        type="text" 
        id="secure-input" 
        maxLength="15" 
        placeholder="Unlock Full CV with Share Code" 
        title="Unlock Full CV with Share Code" 
      />
      <button type="button" className="icon-button">
        <i className="fas fa-lock"></i>
      </button>
    </span>
  );
};

export default NDAInput;