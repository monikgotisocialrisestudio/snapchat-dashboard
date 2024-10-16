import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

interface StatusBadgeProps {
  status: "Live" | "Banned" | "Idle";
}

const statusStyles = {
  Live: {
    badge: "bg-green-500",
    text: "text-green-500",
  },
  Banned: {
    badge: "bg-red-500",
    text: "text-red-500",
  },
  Idle: {
    badge: "bg-gray-400",
    text: "text-gray-400",
  },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const { badge, text } = statusStyles[status];

  return (
    <Badge
      className={cn(
        "rounded-full bg-transparent hover:bg-transparent p-0",
        text
      )}
    >
      <div
        className={cn("mr-1 h-2 w-2 rounded-full text-xs font-normal", badge)}
      />
      {status}
    </Badge>
  );
};

export default StatusBadge;
