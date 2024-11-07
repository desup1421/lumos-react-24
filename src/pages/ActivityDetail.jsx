import React from "react";

const ActivityDetail = () => {
  return (
    <div className="mt-4">
      <h2 className="text-primary">Sample Activity Title</h2>
      <p className="text-muted">
        Sample description of the activity goes here.
      </p>
      <div className="card border-primary my-4">
        <div className="card-body">
          <p className="card-text">Time Spent: 0 seconds</p>
          <div className="btn-group">
            <button className="btn btn-outline-success">
              <i className="bi bi-play-fill"></i> Start
            </button>
            <button className="btn btn-outline-warning">
              <i className="bi bi-pause-fill"></i> Stop
            </button>
            <button className="btn btn-outline-danger">
              <i className="bi bi-arrow-counterclockwise"></i> Reset
            </button>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary mt-3">
        <i className="bi bi-arrow-left"></i> Back to List
      </button>
    </div>
  );
};

export default ActivityDetail;
