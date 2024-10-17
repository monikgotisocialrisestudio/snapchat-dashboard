import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import UserIcon from "@/actions/public/assets/icons/user.png";
import LiveIcon from "@/actions/public/assets/icons/live.png";
import IdleIcon from "@/actions/public/assets/icons/idle.png";
import BannedIcon from "@/actions/public/assets/icons/banned.png";
import { StaticImageData } from "next/image";

const SnapChatAccountAnalytics: React.FC = () => {
  const data: {
    imageSrc: StaticImageData;
    title: string;
    accountCount: number;
  }[] = [
    { imageSrc: UserIcon, title: "Total Account", accountCount: 1542 },
    { imageSrc: IdleIcon, title: "Idle Account", accountCount: 1542 },
    { imageSrc: LiveIcon, title: "Live Account", accountCount: 1542 },
    { imageSrc: BannedIcon, title: "Banned Account", accountCount: 1542 },
  ];

  return (
    <Card>
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
      <CardContent>
        <AnalyticsCard data={data} />
      </CardContent>
    </Card>
  );
};

export default SnapChatAccountAnalytics;
