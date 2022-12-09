import React, { useContext } from "react";
import { userContext } from "App";
import ImageButton from "./ImageButton";

function KidDashNav(props) {
  const [user] = useContext(userContext);
  return (
    <div className="">
      {user.type === "parent" ? (
        <>
          <div className="d-flex flex-row flex-md-column gap-3">
            <ImageButton link={"/dashboard/kids"} imgSrc={"/images/avatar_btn.svg"} label={"Kids"} />
            <ImageButton link={"/dashboard/missions"} imgSrc={"/images/mission.svg"} label={"Missions"} />
            <ImageButton link={"/dashboard/rewards"} imgSrc={"/images/gift_btn.svg"} label={"Rewards"} />
            <ImageButton link={"/dashboard/settings"} imgSrc={"/images/settings_btn.svg"} label={"Settings"} />
          </div>
        </>
      ) : (
        <>
          <div className="d-flex flex-column gap-3">
            <ImageButton link={"/dashboard/missions"} imgSrc={"/images/mission.svg"} label={"Missions"} />
            <ImageButton link={"/dashboard/rewards"} imgSrc={"/images/gift_btn.svg"} label={"Rewards"} />
            <ImageButton link={"/dashboard/settings"} imgSrc={"/images/avatar_btn.svg"} label={"Settings"} />
          </div>
        </>
      )}
    </div>
  );
}

export default KidDashNav;
