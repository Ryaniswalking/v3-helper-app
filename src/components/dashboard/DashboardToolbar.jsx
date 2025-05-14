import { userState } from "react";

function DashboardToolbar({ onClickAdd }) {
  return (
    <div className="dashboard-toolbar">
      <button onClick={onClickAdd}>New</button>
      <button onClick={() => console.log("Import not implemented")}>
        Import
      </button>
    </div>
  );
}


export default DashboardToolbar
