import React,{ useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";


const ActivityList = ({activities, setActivities}) => {
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

  const handleDelete= (id) => {
    axios
      .delete(`http://localhost:3000/activities/${id}`)
      .then(() => {
        setActivities((prevActivities) => {
          return prevActivities.filter((activity) => activity.id !== id);
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  
  return (
    <ul className="list-group">
      {loading ? (
        <li className="list-group-item">Loading...</li>
      ) : (
        activities.map((activity) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={activity.id}>
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
}
export default ActivityList;
