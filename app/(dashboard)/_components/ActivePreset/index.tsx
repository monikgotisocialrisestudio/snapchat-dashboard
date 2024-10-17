import React from "react";
import ActivePreset from "./ActivePreset";
import PresetConversion from "./PresetConversion";

const MainActivePreset = () => {
  return (
    <div className="space-y-4">
      <ActivePreset />
      <PresetConversion />
    </div>
  );
};

export default MainActivePreset;
