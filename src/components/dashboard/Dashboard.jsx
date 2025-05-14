import { useState } from "react";
import TestCaseContainer from "../testcase/TestCaseContainer";
import DashboardToolbar from "./DashboardToolbar";
import '../../styles/Dashboard.css'

function Dashboard() {
  const [showContainer, setShowContainer] = useState(false);
  const [showToolbar, setShowToolbar] = useState(true);

  const handleAddClick = () => {
    setShowToolbar(false)
    setShowContainer(prev => !prev)
  };

  const handleCloseClick = () => {
    setShowToolbar(true)
    setShowContainer(false);
  }

  const handleImportClick = () => {
    console.log("import");
  };

  return (
    <div className="dashboard">
      {showToolbar && (
        <DashboardToolbar onClickAdd={handleAddClick}/> 
      )}
      {showContainer && (
        <TestCaseContainer onClickClose={handleCloseClick}/>
      )}
    </div>
  );
}
export default Dashboard;
