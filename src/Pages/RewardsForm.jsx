import RewardsCRUDForm from "Assets/Forms/RewardCRUDForm";
import React from "react";
import ContactForm from "./ContactForm";




function RewardsForm() {
  return (
    <div>
      <RewardsCRUDForm title="Add Reward" />
      <ContactForm />
    </div>
  );
}

export default RewardsForm;