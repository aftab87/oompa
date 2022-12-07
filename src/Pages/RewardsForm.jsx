import RewardsCRUDForm from "Assets/Forms/RewardCRUDForm";
import React from "react";
import ContactForm from "./ContactForm";




function RewardsForm() {
  return (
    <div>
        <h1>Testing CRUD on rewards database with Mongodb</h1>
        <RewardsCRUDForm />
        <ContactForm />
    </div>
  );
}

export default RewardsForm;