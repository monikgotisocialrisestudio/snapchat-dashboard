import Image from "next/image";
import React, { useState } from "react";
import imageSrc from "@/actions/public/assets/icons/building.png";
import { Slider } from "@/components/ui/slider";

// Define props type for the CityRange component
interface CityRangeProps {
  cityName: string;
  rangeValue: number;
}

// CityRange component for individual city slider
const CityRange: React.FC<CityRangeProps> = ({ cityName, rangeValue }) => {
  // State to hold the current slider value
  const [sliderValue, setSliderValue] = useState<number[]>([rangeValue]);

  return (
    <div className="p-[0.375rem] w-1/2 mt-2">
      <div className="flex justify-start items-center mb-3">
        <div className="h-8 w-8 bg-icon rounded-md flex items-center p-1">
          <Image
            src={imageSrc}
            alt="Building Icon"
            width={25}
            height={25}
            className="m-auto"
          />
        </div>
        <div className="text-sm font-normal my-3 px-2">{cityName}</div>
      </div>
      <div className="flex items-center">
        <Slider
          value={sliderValue}
          onValueChange={setSliderValue}
          max={100}
          step={1}
        />
        <span className="ml-4 text-sm font-medium">{sliderValue[0]}%</span>
      </div>
    </div>
  );
};

// Define the type for the city objects
interface City {
  name: string;
  range: number;
}

// Main component to display multiple CityRange components
const CityRanges: React.FC = () => {
  // Array of city objects with names and range values
  const cities: City[] = [
    { name: "City 1", range: 33 },
    { name: "City 2", range: 50 },
    // { name: "City 3", range: 70 },
    // { name: "City 4", range: 40 },
  ];

  return (
    <div className="flex flex-wrap justify-between">
      {cities.map((city, index) => (
        <CityRange key={index} cityName={city.name} rangeValue={city.range} />
      ))}
    </div>
  );
};

export default CityRanges;
