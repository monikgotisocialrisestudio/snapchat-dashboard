import React, { useState } from "react";
import { FolderData } from "../ActivePresentCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import CESelect from "@/components/shared/ce-select";
import { TIME_FRAME_OPTIONS } from "@/lib/constant";
import { TIME_FRAME_TYPE } from "@/lib/enum";
import Image from "next/image";
import Preset from "@/actions/public/assets/icons/present.png";
import User from "@/actions/public/assets/icons/user.png";
import SingleUserAccountList from "../../SnapChatAccountList/SingleUserAccountList";

interface PresetDetailProps {
  preset: FolderData;
  open?: boolean;
}

const PresetDetail: React.FC<PresetDetailProps> = ({ preset, open }) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(
    TIME_FRAME_TYPE["thisMonth"]
  );
  return (
    <>
      <Card className="mt-4">
        <CardHeader className="py-3 px-4">
          <CardTitle>
            <div className="flex items-center">
              <div className="text-base font-medium">Preset Analytics</div>
              <div className="flex gap-2 ml-auto">
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
        <CardContent className="overflow-y-auto px-4 pt-2">
          <div className="flex justify-between">
            <Card className="bg-subCard w-[48%]">
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex items-center">
                    <Image src={Preset} alt="preset" />
                    <div className="font-normal text-sm text-btn-foreground px-2">
                      Preset Name
                    </div>
                  </div>
                  <div className="text-2xl font-semibold mt-2">
                    {preset.presetName}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-subCard w-[48%]">
              <CardContent className="p-0">
                <div className="p-4">
                  <div className="flex items-center">
                    <Image src={User} alt="user" />
                    <div className="font-normal text-sm text-btn-foreground px-2">
                      Total Account
                    </div>
                  </div>
                  <div className="text-2xl font-semibold mt-2">
                    {preset.accountCount} {""}
                    <span>Account</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-7">
        <CardHeader className="py-3 px-4">
          <CardTitle>
            <div className="flex items-center">
              <div className="text-base font-medium">Account List</div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-y-auto px-4 pt-2">
          <SingleUserAccountList account={preset} open={open} />
        </CardContent>
      </Card>
    </>
  );
};

export default PresetDetail;
