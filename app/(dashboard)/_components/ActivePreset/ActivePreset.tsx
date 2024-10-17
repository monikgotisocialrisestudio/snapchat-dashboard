import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import ActivePresentCard from "./ActivePresentCard";
import { StaticImageData } from "next/image";
import Folder from "@/actions/public/assets/icons/folder.png";
import Preset from "@/actions/public/assets/icons/present.png";
import { getUniqueID } from "@/lib/utils";

const folderData: {
  id: string;
  imageSrc: StaticImageData;
  name: string;
  accountCount: number;
  presetName: string;
}[] = [
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 1",
    accountCount: 1542,
    presetName: "preset 1",
  },
  {
    id: getUniqueID(),
    imageSrc: Preset,
    name: "Preset",
    accountCount: 1542,
    presetName: "preset 2",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 2",
    accountCount: 1542,
    presetName: "preset 3",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 3",
    accountCount: 1542,
    presetName: "preset 4",
  },
];

const ActivePreset = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="text-base font-medium">Active Preset</div>
            <div className="font-normal text-sm text-btn-foreground">
              <Button
                className="flex items-center rounded-md px-2 py-1 text-xs text-btn-foreground"
                variant="outline"
              >
                View All
              </Button>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ActivePresentCard folder={folderData} />
      </CardContent>
    </Card>
  );
};

export default ActivePreset;
