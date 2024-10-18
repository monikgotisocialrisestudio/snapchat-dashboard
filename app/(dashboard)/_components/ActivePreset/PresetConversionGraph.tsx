import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartOptions,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";
import PlusIcon from "@/actions/public/assets/icons/plus.png";

// Register necessary components with Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels // Register the plugin
);

const PresetConversionGraph = () => {
  const data = {
    labels: ["preset1", "preset2", "preset3"],
    datasets: [
      {
        // label: "",
        data: [65, 59, 80],
        backgroundColor: ["#2C6BF1", "#3FC8E4", "#FF9F0A"],
        borderWidth: 1,
        // barThickness: 15,
        // borderRadius: 5,
        barPercentage: 0.3,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    // layout: {
    //   padding: {
    //     left: 10,
    //     right: 10,
    //     top: 10,
    //     bottom: 10,
    //   },
    // },
    responsive: true,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false, // Disable the legend to prevent dataset toggling
      },
      datalabels: {
        anchor: "end",
        align: "end",
        formatter: (value) => `${value}%`,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          callback: (tickValue) => {
            if (typeof tickValue === "number") {
              return `${tickValue}%`;
            }
            return tickValue;
          },
        },
      },
      y: {
        grid: {
          offset: true,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div className="text-sm font-normal mb-4">Avg. Conversion</div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">
          63.33
          <span className="font-semibold text-sm text-btn-foreground">%</span>
        </h2>
        <div className="text-green-600 flex items-center space-x-1">
          <Image src={PlusIcon} alt={"plus"} />
          <span className="font-medium text-sm">32.1%</span>
        </div>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default PresetConversionGraph;
