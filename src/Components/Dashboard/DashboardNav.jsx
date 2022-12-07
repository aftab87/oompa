import React, { useContext } from "react";
import { userContext } from "App";
import ImageButton from "./ImageButton";

function KidDashNav(props) {
  const [user] = useContext(userContext);
  return (
    <div className="d-flex flex-column gap-3">
      {user.type === "parent" ? (
        <>
          <ImageButton link={"/dashboard/kids"} imgSrc={"../images/icon-binoculors.svg"} label={"Kids"} />
          <ImageButton link={"/dashboard/missions"} imgSrc={"../images/icon-binoculors.svg"} label={"Missions"} />
          <ImageButton link={"/dashboard/rewards"} imgSrc={"../images/icon-binoculors.svg"} label={"Rewards"} />
          <ImageButton link={"/dashboard/settings"} imgSrc={"../images/icon-binoculors.svg"} label={"Settings"} />
        </>
      ) : (
        <>
          <ImageButton link={"/dashboard/adventures"} imgSrc={"../images/icon-binoculors.svg"} label={"My Adventures"} />
          <ImageButton link={"/dashboard/missions"} imgSrc={"../images/icon-binoculors.svg"} label={"Missions"} />
          <ImageButton link={"/dashboard/rewards"} imgSrc={"../images/icon-binoculors.svg"} label={"Rewards"} />
          <ImageButton link={"/dashboard/settings"} imgSrc={"../images/icon-binoculors.svg"} label={"Settings"} />
        </>
      )}
    </div>
  );
}

export default KidDashNav;
