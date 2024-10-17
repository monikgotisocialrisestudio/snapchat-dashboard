import StatusBadge from "@/components/shared/statusBadge";
// import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import React from "react";
import { FaUser } from "react-icons/fa";

interface Account {
  id: string;
  name: string;
  status: "Live" | "Banned" | "Idle";
}

interface AccountListProps {
  accounts: Account[];
}

const AccountList: React.FC<AccountListProps> = ({ accounts }) => {
  return (
    <>
      {accounts.map((account) => (
        <Card key={account.id} className="bg-subCard mb-4">
          <CardContent className="p-0">
            <div className="flex justify-between items-center my-auto p-4">
              <div className="flex items-center gap-2">
                <div className="h-11 w-11 rounded-full bg-user-foreground flex items-center justify-center">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">{account.name}</div>
                  <StatusBadge status={account.status} />
                </div>
              </div>
              <div>
                <MoreVertical className="h-5 w-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default AccountList;
