import React from "react";
import SnapChatAccountList from "../_components/SnapChatAccountList";
import SnapChatAccountAnalytics from "../_components/SnapChatAccountAnalytics";
import ActivePreset from "../_components/ActivePreset";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[30%_40%_30%] gap-4 p-4">
      <div>
        <SnapChatAccountList />
      </div>
      <div>
        <SnapChatAccountAnalytics />
      </div>
      <div>
        <ActivePreset />
      </div>
    </div>
  );
};

export default Dashboard;
