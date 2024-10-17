"use client";

import CESelect from "@/components/shared/ce-select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TIME_FRAME_OPTIONS } from "@/lib/constant";
import { TIME_FRAME_TYPE } from "@/lib/enum";
import { Calendar } from "lucide-react";
import React, { useState } from "react";
import PresetConversionGraph from "./PresetConversionGraph";

const PresetConversion = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(
    TIME_FRAME_TYPE["thisMonth"]
  );
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="text-base font-medium">Preset Conversion</div>
            <div className="font-normal text-sm text-btn-foreground">
              <CESelect
                triggerProps={{ className: "w-fit bg-secondary/70" }}
                options={TIME_FRAME_OPTIONS}
                value={selectedTimeFrame}
                onValueChange={(value) =>
                  setSelectedTimeFrame(value as TIME_FRAME_TYPE)
                }
                icon={<Calendar size={20} />}
              />
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <PresetConversionGraph />
      </CardContent>
    </Card>
  );
};

export default PresetConversion;
