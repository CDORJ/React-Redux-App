import React, { useState } from "react";
import { getActivities } from "../actions";
import { connect } from "react-redux";

const CardComponent = () => {
  const [categories] = useState([
    "education",
    "recreational",
    "social",
    "diy",
    "charity",
    "cooking",
    "relaxation",
    "music",
    "busywork",
  ]);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  console.log("randomCategory", randomCategory);

  const [selectedCategory, setSelectedCategory] = useState(randomCategory);

  return (
    <div onSubmit={() => getActivities(/* category */)} className="activity">
      <p>
        Here's something to <strong>consider</strong>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, {
  /* whatever action creators are needed */
})(CardComponent);
