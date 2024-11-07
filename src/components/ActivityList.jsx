import React from "react";

const ActivityList = () => {
  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>Sample Activity Title</span>
        <div>
          <button className="btn btn-secondary btn-sm mx-1">Details</button>
          <button className="btn btn-danger btn-sm">Delete</button>
        </div>
      </li>
    </ul>
  );
};

export default ActivityList;
