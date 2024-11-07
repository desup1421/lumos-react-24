/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const ActivityList = ({ activities, setActivities }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/activities")
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        confirmButton: "btn btn-primary",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/activities/${id}`)
          .then(() => {
            setActivities((prevActivities) => {
              return prevActivities.filter((activity) => activity.id !== id);
            });
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              customClass: {
                confirmButton: "btn btn-success",
              }
            });
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    });
  };

  return (
    <ul className="list-group">
      {loading ? (
        <li className="list-group-item">Loading...</li>
      ) : (
        activities.map((activity) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={activity.id}
          >
            <span>{activity.title}</span>
            <div>
              <Link
                className="btn btn-secondary btn-sm mx-1"
                to={`/activity/${activity.id}`}
              >
                Details
              </Link>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(activity.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

ActivityList.propTypes = {
  activities: PropTypes.array,
  setActivities: PropTypes.func,
};
export default ActivityList;
