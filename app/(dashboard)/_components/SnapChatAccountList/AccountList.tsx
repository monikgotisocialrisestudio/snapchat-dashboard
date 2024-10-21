import StatusBadge from "@/components/shared/statusBadge";
import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import React from "react";
import { FaUser } from "react-icons/fa";
import SingleUserAccountList from "./SingleUserAccountList";

interface Account {
  id: string;
  name: string;
  status: "Live" | "Banned" | "Idle";
  accountList: { accountID: string; details: string; accountName: string }[];
}

interface AccountListProps {
  accounts: Account[];
  onAccountSelect: (account: Account | null) => void;
  selectedAccount: Account | null;
}

const AccountList: React.FC<AccountListProps> = ({
  accounts,
  onAccountSelect,
  selectedAccount,
}) => {
  const handleAccountClick = (account: Account) => {
    onAccountSelect(account);
  };

  return (
    <>
      {selectedAccount ? (
        <SingleUserAccountList account={selectedAccount} />
      ) : (
        accounts.map((account) => (
          <Card
            key={account.id}
            className="bg-subCard mb-4"
            onClick={() => handleAccountClick(account)}
          >
            <CardContent className="p-0">
              <div className="flex justify-between items-center my-auto p-3">
                <div className="flex items-center gap-2">
                  <div className="h-11 w-11 rounded-full bg-user-foreground flex items-center justify-center">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <div className="text-sm font-normal">{account.name}</div>
                    <StatusBadge status={account.status} />
                  </div>
                </div>
                <div>
                  <MoreVertical className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </>
  );
};

export default AccountList;
