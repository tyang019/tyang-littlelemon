function CustomAlert({ message, onConfirm }) {
  return (
    <div className="alert-box" style={{ display: "flex" }}>
      <div className="alert-content">
        <p>{message}</p>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
}

export default CustomAlert;
