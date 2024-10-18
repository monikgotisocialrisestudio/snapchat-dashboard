"use client";

import CESelect from "@/components/shared/ce-select";
import { TIME_FRAME_OPTIONS, TINDER_ACTION_OPTIONS } from "@/lib/constant";
import { TIME_FRAME_TYPE, TINDER_ACTION_TYPE } from "@/lib/enum";
import { Calendar } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useState, Suspense } from "react";
import TinderIcon from "@/actions/public/assets/icons/tinder.png";
import Image from "next/image";
import CityRange from "./CityRange";
import { Skeleton } from "@/components/ui/skeleton";

// Dynamically import CityMap
const CityMap = dynamic(() => import("./CityMap"), {
  ssr: false,
  suspense: true,
});

const CityLocation = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(
    TIME_FRAME_TYPE["thisMonth"]
  );
  const [selectedName, setSelectedName] = useState(
    TINDER_ACTION_TYPE["tinder"]
  );

  return (
    <div className="relative">
      <div className="flex items-center py-4">
        <div className="text-base font-medium">Most Performing City</div>
        <div className="flex gap-2 ml-auto relative z-10">
          <CESelect
            triggerProps={{ className: "w-fit bg-secondary/70 z-20" }}
            options={TINDER_ACTION_OPTIONS}
            value={selectedName}
            onValueChange={(value) =>
              setSelectedName(value as TINDER_ACTION_TYPE)
            }
            icon={
              <Image src={TinderIcon} alt="tinder" width={20} height={20} />
            }
          />
          <CESelect
            triggerProps={{ className: "w-fit bg-secondary/70 z-20" }}
            options={TIME_FRAME_OPTIONS}
            value={selectedTimeFrame}
            onValueChange={(value) =>
              setSelectedTimeFrame(value as TIME_FRAME_TYPE)
            }
            icon={<Calendar size={20} />}
          />
        </div>
      </div>
      <div className="relative z-0 pb-2">
        <Suspense
          fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" />}
        >
          <CityMap />
        </Suspense>
        <CityRange />
      </div>
    </div>
  );
};

export default CityLocation;
