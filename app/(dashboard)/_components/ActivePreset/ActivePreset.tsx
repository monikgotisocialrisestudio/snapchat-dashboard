"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import ActivePresentCard from "./ActivePresentCard";
import { StaticImageData } from "next/image";
import Folder from "@/actions/public/assets/icons/folder.png";
import Preset from "@/actions/public/assets/icons/present.png";
import { getUniqueID } from "@/lib/utils";
import ActivePresetDrawer from "./ActivePresetDrawer";

const folderData: {
  id: string;
  imageSrc: StaticImageData;
  name: string;
  accountCount: number;
  presetName: string;
  accountList: {
    accountID: string;
    details: string;
    accountName: string;
  }[];
}[] = [
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 1",
    accountCount: 1542,
    presetName: "preset 1",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Preset,
    name: "Preset",
    accountCount: 1542,
    presetName: "preset 2",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 2",
    accountCount: 1542,
    presetName: "preset 3",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 3",
    accountCount: 1542,
    presetName: "preset 4",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
];

const ActivePreset = () => {
  const [open, setOpen] = useState(false);

  const onOpenChange = (open: boolean) => {
    setOpen(open);
  };
  return (
    <>
      <Card>
        <CardHeader className="py-4">
          <CardTitle className="p-0">
            <div className="flex justify-between items-center">
              <div className="text-base font-medium">Active Preset</div>
              <div className="font-normal text-sm text-btn-foreground">
                <Button
                  className="flex items-center rounded-md px-2 py-1 text-xs text-btn-foreground"
                  variant="outline"
                  onClick={() => onOpenChange(true)}
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
      <ActivePresetDrawer open={open} onOpenChange={onOpenChange} />
    </>
  );
};

export default ActivePreset;
