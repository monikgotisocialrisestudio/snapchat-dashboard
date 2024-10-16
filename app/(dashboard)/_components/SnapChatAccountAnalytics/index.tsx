import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SnapChatAccountAnalytics = () => {
  return (
    <Card className="h-[88vh]">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="text-base font-medium">
              Snapchat Account Analytics
            </div>
            <div className="font-normal text-sm text-btn-foreground">
              02 Sep, 2024
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-y-auto h-[75vh]"></CardContent>
    </Card>
  );
};

export default SnapChatAccountAnalytics;
