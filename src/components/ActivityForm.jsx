import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import useFormControl from "../hooks/useFormControl";
import axios from "axios";

const ActivityForm = ({ showModal, setShowModal, setActivities }) => {
  const [formInput, handleChangeFormInput, clearForm] = useFormControl({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    clearForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3000/activities", formInput)
      .then((response) => {
        setActivities((prevActivities) => {
          return [...prevActivities, response.data];
        });
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formInput.title}
              onChange={(e) => handleChangeFormInput(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name="description"
              value={formInput.description}
              onChange={(e) => handleChangeFormInput(e)}
            ></textarea>
          </div>
          <Button variant="primary" disabled={loading} type="submit">
            Add
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

ActivityForm.propTypes = {
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
  setActivities: PropTypes.func,
};

export default ActivityForm;
