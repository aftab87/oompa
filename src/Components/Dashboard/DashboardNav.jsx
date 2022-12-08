import React, { useContext } from "react";
import { userContext } from "App";
import ImageButton from "./ImageButton";

function KidDashNav(props) {
  const [user] = useContext(userContext);
  return (
    <div className="d-flex flex-column gap-3">
      {user.type === "parent" ? (
        <>
          <ImageButton link={"/dashboard/kids"} imgSrc={"../images/avatar_btn.svg"} label={"Kids"} />
          <ImageButton link={"/dashboard/missions"} imgSrc={"../images/mission.svg"} label={"Missions"} />
          <ImageButton link={"/dashboard/rewards"} imgSrc={"../images/gift_btn.svg"} label={"Rewards"} />
          <ImageButton link={"/dashboard/settings"} imgSrc={"../images/settings_btn.svg"} label={"Settings"} />
        </>
      ) : (
        <>
          <ImageButton link={"/dashboard/adventures"} imgSrc={"../images/icon-binoculors.svg"} label={"My Adventures"} />
          <ImageButton link={"/dashboard/missions"} imgSrc={"../images/mission.svg"} label={"Missions"} />
          <ImageButton link={"/dashboard/rewards"} imgSrc={"../images/gift_btn.svg"} label={"Rewards"} />
          <ImageButton link={"/dashboard/settings"} imgSrc={"../images/avatar_btn.svg"} label={"Settings"} />
        </>
      )}
    </div>
  );
}

export default KidDashNav;
