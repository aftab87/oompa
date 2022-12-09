import React from "react";

function ProgressBar({ points }) {
  const utp = 16;
  let percent = (utp / points) * 100;
  let color = "bg-info";
  if (percent > 100) {
    percent = 100;
    color = "bg-success";
  }

  return (
    <>
      <div class="progress">
        <div style={{ width: `${percent}%` }} class="progress-bar" role="progressbar" aria-label="Basic example" aria-valuenow={points} aria-valuemin="0" aria-valuemax={points}></div>
      </div>
      <p>teft</p>
    </>
  );
}

export default ProgressBar;
