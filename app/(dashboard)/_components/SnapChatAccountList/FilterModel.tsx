// FilterPopover.tsx
import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

interface FilterPopoverProps {
  onClose: () => void;
}

const FilterPopover: React.FC<FilterPopoverProps> = ({ onClose }) => {
  return (
    <Popover.Portal>
      <Popover.Content
        className="p-4 z-10 bg-card border rounded-xl shadow-lg text-white mt-2"
        side="bottom"
        align="start"
        onOpenAutoFocus={(e) => e.preventDefault()} // Prevent focus on the popover when opened
      >
        <Card className="border-none w-[373px]">
          <CardHeader className="p-0">
            <CardTitle>
              <div className="flex items-center">
                <div className="text-base font-medium">Filter</div>
                <div className="flex gap-2 ml-auto">
                  <Button
                    className="flex items-center rounded-md px-2 py-1 text-xs bg-transparent border-none focus:bg-transparent"
                    variant="outline"
                    onClick={onClose}
                  >
                    <X className="h-5 w-5 mr-1" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-y-auto max-h-[810px]"></CardContent>
        </Card>
      </Popover.Content>
    </Popover.Portal>
  );
};

export default FilterPopover;
