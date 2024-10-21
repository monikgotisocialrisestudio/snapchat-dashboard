import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { getUniqueID } from "@/lib/utils";
import Folder from "@/actions/public/assets/icons/folder.png";
import { StaticImageData } from "next/image";
import ActivePresentCard, { FolderData } from "../ActivePresentCard";
import React, { useState } from "react";
import CEInput from "@/components/shared/ce-input";
import { ArrowLeft, Search } from "lucide-react";
import PresetDetail from "./PresetDetail";

type propType = React.ComponentProps<typeof Sheet> & {};

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
    accountCount: 310,
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 2",
    accountCount: 310,
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 3",
    accountCount: 310,
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 4",
    accountCount: 310,
    presetName: "preset 5",
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 5",
    accountCount: 310,
    presetName: "preset 6",
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 6",
    accountCount: 310,
    presetName: "preset 7",
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 7",
    accountCount: 310,
    presetName: "preset 8",
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 8",
    accountCount: 310,
    presetName: "preset 9",
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 9",
    accountCount: 310,
    presetName: "preset 10",
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 10",
    accountCount: 310,
    presetName: "preset 10",
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 11",
    accountCount: 310,
    presetName: "preset 11",
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 12",
    accountCount: 310,
    presetName: "preset 12",
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
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
];

function ActivePresetDrawer(props: propType) {
  const { open, onOpenChange } = props;
  const [currentTitle, setCurrentTitle] = useState("All Active Preset");
  const [selectedPreset, setSelectedPreset] = useState<FolderData | null>(null);

  const handleCardSelect = (preset: FolderData) => {
    setSelectedPreset(preset);
    setCurrentTitle("Detail Preset");
  };

  const handleBackClick = () => {
    setSelectedPreset(null);
    setCurrentTitle("All Active Preset");
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="min-w-[454px] overflow-auto py-6 px-4">
        <SheetHeader>
          <SheetTitle className="font-normal text-xl">
            <div className="flex items-center">
              {selectedPreset && (
                <button onClick={handleBackClick} className="mr-2">
                  <ArrowLeft className="h-5 w-5" />
                </button>
              )}
              <div className="text-base font-medium">{currentTitle}</div>
            </div>
          </SheetTitle>
        </SheetHeader>

        {!selectedPreset ? (
          <>
            <div className="mt-4">
              <CEInput
                autoComplete="off"
                placeholder="Search"
                prefix={<Search className="h-5 w-5 text-muted-foreground" />}
                type="text"
                className="w-full border-b pr-10 text-base font-normal pl-8 py-4 bg-subCard"
              />
            </div>

            <div className="mt-6 flex min-h-[calc(100dvh-100px)] flex-col gap-10">
              <ActivePresentCard
                folder={folderData}
                onCardClick={handleCardSelect}
              />
            </div>
          </>
        ) : (
          <PresetDetail preset={selectedPreset} open={open} />
        )}
      </SheetContent>
    </Sheet>
  );
}

export default ActivePresetDrawer;
