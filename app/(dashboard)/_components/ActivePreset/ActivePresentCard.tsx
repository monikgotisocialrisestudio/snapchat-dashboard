import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import React from "react";

export interface FolderData {
  id: string;
  imageSrc: StaticImageData;
  name: string;
  accountCount: number;
  presetName: string;
}

interface AnalyticsCardProps {
  folder: FolderData[];
}

const ActivePresentCard: React.FC<AnalyticsCardProps> = ({ folder }) => {
  return (
    <div className="flex flex-wrap justify-between gap-y-4">
      {folder.map((folderData) => (
        <div key={folderData.id} className="w-[48.5%]">
          <Card className="bg-subCard">
            <CardContent className="p-0">
              <div className="p-4">
                <div className="flex items-center">
                  <Image src={folderData.imageSrc} alt="folder" />
                  <div className="font-normal text-sm text-btn-foreground px-2">
                    {folderData.name}
                  </div>
                </div>
                <div className="text-xl font-semibold mt-2">
                  {folderData.accountCount}{" "}
                  <span className="text-sm font-normal text-btn-foreground">
                    Accounts
                  </span>
                </div>
                <div className="text-sm font-normal text-btn-foreground mt-2">
                  {folderData.presetName}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ActivePresentCard;
