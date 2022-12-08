import SignUpForm from "Components/Forms/SignUpForm";
import React from "react";

function ParentAccountSettings(props) {
  return (
    <>
      {/* <div>parents account settings section</div> */}
      <SignUpForm edit={true}/>
    </>
  );
}

export default ParentAccountSettings;
