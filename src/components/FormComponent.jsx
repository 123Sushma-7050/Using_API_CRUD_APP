import React, { useState } from "react";
import "./form.css";

const FormComponent = ({
  formData,
  setFormData,
  handleSubmit,
  getUpdatePosts,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    handleSubmit({ ...formData });
  };
  return (
    <div className="form-container">
      <div className="mb-3 col-6">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={formData?.title}
          onChange={(event) => handleChange(event)}
          placeholder="Please enter the title"
        />
      </div>
      <div className="mb-3 col-6">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Body
        </label>
        <textarea
          className="form-control"
          name="body"
          value={formData?.body}
          onChange={(event) => handleChange(event)}
          rows="3"
        ></textarea>
      </div>
      <div className="d-flex">
        {" "}
        <button
          type="button"
          className="btn btn-primary  mx-3"
          onClick={onSubmit}
        >
          Submit
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => getUpdatePosts()}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
