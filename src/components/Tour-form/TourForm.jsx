import { useState } from "react";
import "./TourForm.scss";

const TourForm = ({ visible, onClose, onAddTour }) => {
  const [tourName, setTourName] = useState("");
  const [tourPrice, setTourPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const [name, price] = event.target.elements;

    const nextTour = {
      id: Math.ceil(Math.random() * 1000000),
      name: name.value,
      price: price.value,
    };

    onAddTour(nextTour);

    onClose();
    handleClearForm();
  };

  const handleClearForm = () => {
    setTourName("");
    setTourPrice("");
  };

  const handleClose = () => {
    handleClearForm();
    onClose();
  };

  return (
    <div className="tour-form" style={{ display: visible ? "block" : "none" }}>
      <button className="close" onClick={handleClose}>
        x
      </button>
      <h2>Tour form</h2>

      <form onSubmit={handleSubmit}>
        <div className="common-input-wrapper">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={tourName}
            onChange={(e) => setTourName(e.target.value)}
          />
        </div>
        <div className="common-input-wrapper">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={tourPrice}
            onChange={(e) => setTourPrice(e.target.value)}
          />
        </div>

        <button className="btn primary" type="submit">
          Save
        </button>
        <button className="btn" type="button" onClick={handleClearForm}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default TourForm;
