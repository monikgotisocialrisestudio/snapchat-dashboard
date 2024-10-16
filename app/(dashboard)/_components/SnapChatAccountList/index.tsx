import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Filter, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccountList from "./AccountList";
import { getUniqueID } from "@/lib/utils";

interface Account {
  id: string;
  name: string;
  status: "Live" | "Banned" | "Idle";
}

const accountsData: Account[] = [
  { id: getUniqueID(), name: "Jennifer Kutch (Bot 1)", status: "Live" },
  { id: getUniqueID(), name: "John Gorczany (Bot 2)", status: "Idle" },
  { id: getUniqueID(), name: "Shelly Dach (Bot 3)", status: "Banned" },
  { id: getUniqueID(), name: "Henry Homenick (Bot 4)", status: "Idle" },
  { id: getUniqueID(), name: "Lucia Beahan (Bot 5)", status: "Banned" },
  { id: getUniqueID(), name: "Lee Sawayn (Bot 6)", status: "Live" },
  { id: getUniqueID(), name: "Erin Koch (Bot 7)", status: "Banned" },
];

const SnapChatAccountList: React.FC = () => {
  return (
    <Card className="h-[88vh]">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-center">
            <div className="text-base font-medium">Snapchat Account List</div>
            <div className="flex gap-2">
              <Button
                className="flex items-center rounded-md px-2 py-1 text-xs text-btn-foreground"
                variant="outline"
              >
                <Filter className="h-5 w-5 mr-1" aria-hidden="true" />
                Filter
              </Button>
              <Button
                className="flex items-center rounded-md px-2 py-1 text-btn-foreground"
                variant="outline"
              >
                <Check size={20} />
              </Button>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-y-auto h-[75vh]">
        <AccountList accounts={accountsData} />
      </CardContent>
    </Card>
  );
};

export default SnapChatAccountList;
