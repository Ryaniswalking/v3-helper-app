import { userState } from "react";
import { Button } from "@mui/material"
 
function DashboardToolbar({ onClickAdd }) {
  return (
    <div className="dashboard-toolbar">
      <Button onClick={onClickAdd}>New</Button>
      <Button onClick={() => console.log("Import not implemented")}>
        Import
      </Button>
    </div>
  );
}


export default DashboardToolbar
