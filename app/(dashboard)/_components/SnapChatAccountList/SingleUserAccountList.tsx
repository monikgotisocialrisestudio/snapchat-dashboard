import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import React from "react";
import { FaUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface AccountDetailsProps {
  open?: boolean;
  account: {
    name: string;
    accountList: { accountID: string; details: string; accountName: string }[];
  };
}

const SingleUserAccountList: React.FC<AccountDetailsProps> = ({
  account,
  open,
}) => {
  return (
    <>
      {account.accountList.map((acc) => (
        <div key={acc.accountID} className="flex items-center mb-4">
          <Card className="flex-grow bg-subCard">
            <CardContent className="p-0">
              <div className="flex justify-between items-center my-auto p-3">
                <div className="flex items-center gap-2">
                  <div className="h-11 w-11 rounded-full bg-user-foreground flex items-center justify-center">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-normal">{acc.accountName}</div>
                    <div className="text-xs font-normal text-content-foreground">
                      {acc.details}
                    </div>
                  </div>
                </div>
                <div>
                  <MoreVertical className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
      {!open && (
        <Button className="w-full rounded-lg py-6 bg-blue-600 hover:bg-blue-500 text-white">
          Download All
        </Button>
      )}
    </>
  );
};

export default SingleUserAccountList;
