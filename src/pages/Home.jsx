import React, { useState } from "react";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";

const Home = () => {
  const [showModal, setShowModal] = useState(false); // State untuk mengontrol modal
  const [activities, setActivities] = useState([]);


  return (
    <div>
      <h1 className="my-4">Daily Activity Manager</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        Add Activity
      </button>
      <ActivityList activities={activities} setActivities={setActivities} />
      <ActivityForm showModal={showModal} setShowModal={setShowModal} setActivities={setActivities} />
    </div>
  );
};

export default Home;
