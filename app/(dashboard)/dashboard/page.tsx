import React from "react";
import SnapChatAccountList from "../_components/SnapChatAccountList";
import SnapChatAccountAnalytics from "../_components/SnapChatAccountAnalytics";
import ActivePreset from "../_components/ActivePreset";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[30%_40%_30%] p-4">
      <div className="my-4 lg:my-0">
        <SnapChatAccountList />
      </div>
      <div className="lg:mx-4 my-4 lg:my-0">
        <SnapChatAccountAnalytics />
      </div>
      <div className="my-4 lg:my-0">
        <ActivePreset />
      </div>
    </div>
  );
};

export default Dashboard;
