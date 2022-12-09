import React, { useContext, useEffect, useReducer, useState } from "react";
import { Button } from "react-bootstrap";
import { userContext } from "App";

function KidSettings(props) {
  const [user, setUser] = useContext(userContext);
  const [avatar, setAvatar] = useState(user.avatar);
  const [isSaved, setIsSaved] = useState(true);

  function updateAvatar() {
    fetch("http://localhost:3001/kidsavatar/" + user.id, {
      method: "PUT",
      body: JSON.stringify({
        avatar: avatar.toString(),
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    }).then((data) => data.json());
  }

  function saveAvatar() {
    updateAvatar();
    setIsSaved(false);
  }
  useEffect(() => {});

  function change(n) {
    setAvatar(n);
    console.log(n);
    // const temp = user;
    // temp.avatar = avatar;
    setUser(user);
  }

  return (
    <section className="settings">
      {/* prettier-ignore */}
      <div className="row">
        <div className="col-12 col-md-6 text-center">
        <img src={`/images/avatar${avatar}.svg`} alt="main avatar" width="250" className="img-fluid" />
        <h2>You can select your avatar</h2>
        </div>
        <div className=" col-12 col-md-6 d-flex justify-content-start">
          <div className="row">

          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar1.svg" width="150" alt="avatar 1" onClick={()=>{change(1)}} />
          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar2.svg" width="150" alt="avatar 2" onClick={()=>{change(2)}} />
          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar3.svg" width="150" alt="avatar 3" onClick={()=>{change(3)}} />
          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar4.svg" width="150" alt="avatar 4" onClick={()=>{change(4)}}/>
          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar5.svg" width="150" alt="avatar 5" onClick={()=>{change(5)}}/>
          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar6.svg" width="150" alt="avatar 6" onClick={()=>{change(6)}}/>
          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar7.svg" width="150" alt="avatar 7" onClick={()=>{change(7)}}/>
          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar8.svg" width="150" alt="avatar 8" onClick={()=>{change(8)}}/>
          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar9.svg" width="150" alt="avatar 9" onClick={()=>{change(9)}}/>
          <img className="col-6 col-md-4 col-lg-3 btn btn-outline-primary" src="/images/avatar10.svg" width="150" alt="avatar 10" onClick={()=>{change(10)}}/>
          { isSaved ?<Button className="primary" onClick={saveAvatar}>Save</Button> : <Button className="primary" onClick={saveAvatar}>Saved!</Button>}
        </div>
          </div>
      </div>
    </section>
  );
}

export default KidSettings;
