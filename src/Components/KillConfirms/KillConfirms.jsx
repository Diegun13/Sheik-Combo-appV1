import { comboVod } from "../Combo/ComboCard";

export default function KillConfirms() {
  return (
    <>
      <div className="killConfirms-card glass">
        <h1>Kill Confirms</h1>
        <img className="comboVid" src={comboVod[0].file} />
      </div>
    </>
  );
}
