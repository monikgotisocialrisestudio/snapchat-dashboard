"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import { Filter, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AccountList from "./AccountList";
import { getUniqueID } from "@/lib/utils";

interface Account {
  id: string;
  name: string;
  status: "Live" | "Banned" | "Idle";
  accountList: { accountID: string; details: string; accountName: string }[];
}

const accountsData: Account[] = [
  {
    id: getUniqueID(),
    name: "Jennifer Kutch (Bot 1)",
    status: "Live",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 3",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 4",
      },
    ],
  },
  {
    id: getUniqueID(),
    name: "John Gorczany (Bot 2)",
    status: "Idle",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
  {
    id: getUniqueID(),
    name: "Shelly Dach (Bot 3)",
    status: "Banned",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
  {
    id: getUniqueID(),
    name: "Henry Homenick (Bot 4)",
    status: "Idle",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
  {
    id: getUniqueID(),
    name: "Lucia Beahan (Bot 5)",
    status: "Banned",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
  {
    id: getUniqueID(),
    name: "Lee Sawayn (Bot 6)",
    status: "Live",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
  {
    id: getUniqueID(),
    name: "Erin Koch (Bot 7)",
    status: "Banned",
    accountList: [
      {
        accountID: getUniqueID(),
        details: "Details for Account 1",
        accountName: "Account 1",
      },
      {
        accountID: getUniqueID(),
        details: "Additional Info for Account 1",
        accountName: "Account 2",
      },
    ],
  },
];

const SnapChatAccountList: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState("Snapchat Account List");
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);

  const handleAccountSelect = (account: Account | null) => {
    if (account) {
      setCurrentTitle(account.name);
    } else {
      setCurrentTitle("Snapchat Account List");
    }
    setSelectedAccount(account);
  };

  const handleBackClick = () => {
    setCurrentTitle("Snapchat Account List");
    setSelectedAccount(null);
  };

  return (
    <Card>
      <CardHeader className="py-4">
        <CardTitle>
          <div className="flex items-center">
            {selectedAccount && (
              <button onClick={handleBackClick} className="mr-2">
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <div className="text-base font-medium">{currentTitle}</div>
            <div className="flex gap-2 ml-auto">
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
      <CardContent className="overflow-y-auto">
        <AccountList
          accounts={accountsData}
          onAccountSelect={handleAccountSelect}
          selectedAccount={selectedAccount}
        />
      </CardContent>
    </Card>
  );
};

export default SnapChatAccountList;
