import React, { useState } from "react";

const initialState = {
  name: "",
  region: ""
};

const ExcersizeForm = props => {
  const [exForm, setExForm] = useState(initialState);

  const handleChanges = e => {
    setExForm({
      ...exForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setExForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChanges}
        placeholder="Name of Exersize"
      />
      <input
        type="text"
        name="region"
        id="region"
        onChange={handleChanges}
        placeholder="Name of Region"
      />
      <button> Add Excersize </button>
    </form>
  );
};

export default ExcersizeForm;
