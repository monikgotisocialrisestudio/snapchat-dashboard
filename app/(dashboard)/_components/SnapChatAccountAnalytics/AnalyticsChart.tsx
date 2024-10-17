"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

const ChartComponent: React.FC = () => {
  // Static data for the chart
  const staticData = [
    { title: "Account A", accountCount: 10 },
    { title: "Account B", accountCount: 25 },
    { title: "Account C", accountCount: 15 },
    { title: "Account D", accountCount: 30 },
    { title: "Account E", accountCount: 20 },
  ];

  const chartData: ChartData<"bar"> = {
    labels: staticData.map((item) => item.title),
    datasets: [
      {
        label: "", // Set to empty string to remove the label from the legend
        data: staticData.map((item) => item.accountCount),
        backgroundColor: "#007bff", // Blue color for the bars
        borderWidth: 1,
        borderRadius: 3,
        // Add data labels options here
        datalabels: {
          display: false, // Disable data labels
        },
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
      datalabels: {
        display: false, // Disable the data labels
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
        stacked: false,
        ticks: {
          display: false, // Hide x-axis ticks
        },
      },
      y: {
        display: false, // Hide y-axis
        ticks: {
          display: false, // Hide y-axis ticks
        },
      },
    },
    barPercentage: 0.9, // Adjust to make columns narrower (0 to 1)
    categoryPercentage: 0.7, // Adjust to control spacing
  };

  return <Bar data={chartData} options={options} />;
};

export default ChartComponent;
