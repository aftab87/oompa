import FormExample from "Examples/FormExample";
import AddChore from "Examples/TestChoreBackEnd";
import React from "react";

function Dashboard(props) {
  return (
    <div>
      <h1> This is the Dashboard Page</h1>
      <AddChore />
      <FormExample />
    </div>
  );
}

export default Dashboard;
