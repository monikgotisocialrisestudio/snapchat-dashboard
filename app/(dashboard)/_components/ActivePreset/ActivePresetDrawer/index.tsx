import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { getUniqueID } from "@/lib/utils";
import Folder from "@/actions/public/assets/icons/folder.png";
import { StaticImageData } from "next/image";
import ActivePresentCard from "../ActivePresentCard";
import React, { useState } from "react";
import CEInput from "@/components/shared/ce-input";
import { Search } from "lucide-react";

type propType = React.ComponentProps<typeof Sheet> & {};

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
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 4",
    accountCount: 1542,
    presetName: "preset 5",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 5",
    accountCount: 1542,
    presetName: "preset 6",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 6",
    accountCount: 1542,
    presetName: "preset 7",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 7",
    accountCount: 1542,
    presetName: "preset 8",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 8",
    accountCount: 1542,
    presetName: "preset 9",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 9",
    accountCount: 1542,
    presetName: "preset 10",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 10",
    accountCount: 1542,
    presetName: "preset 10",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 11",
    accountCount: 1542,
    presetName: "preset 11",
  },
  {
    id: getUniqueID(),
    imageSrc: Folder,
    name: "Folder 12",
    accountCount: 1542,
    presetName: "preset 12",
  },
];
function ActivePresetDrawer(props: propType) {
  const { open, onOpenChange } = props;
  const [searchTerm, setSearchTerm] = useState("");

  // Filter folders based on the search term
  const filteredFolders = folderData.filter((folder) =>
    folder.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-[429px] overflow-auto py-6 px-4">
        <SheetHeader>
          <SheetTitle className="font-normal text-xl">
            All Active Preset
          </SheetTitle>
        </SheetHeader>

        <div className="mt-4">
          <CEInput
            autoComplete="off"
            placeholder="Search"
            prefix={
              <>
                <Search className="h-5 w-5 text-muted-foreground" />
              </>
            }
            type="text"
            className="w-full border-b pr-10 text-base font-normal pl-8 py-4 bg-subCard"
          />
        </div>

        <div className="mt-6 flex min-h-[calc(100dvh-100px)] flex-col gap-10">
          <ActivePresentCard folder={filteredFolders} />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default ActivePresetDrawer;
