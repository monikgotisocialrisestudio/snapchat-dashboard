"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const TooltipProvider = TooltipPrimitive.Provider; // Import TooltipProvider
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = TooltipPrimitive.Content;

type propType = React.ComponentProps<typeof SliderPrimitive.Root> & {
  tooltip?: React.ComponentProps<typeof TooltipContent>;
  from?: string;
  to?: string;
};

const SliderRangeState = (props: propType) => {
  const {
    tooltip = {
      side: "top",
    },
    value,
    from,
    to,
    ...rest
  } = props;

  return (
    <TooltipProvider>
      {" "}
      {/* Wrap with TooltipProvider */}
      <SliderPrimitive.Root
        value={value}
        max={100}
        step={1}
        minStepsBetweenThumbs={1}
        aria-label="Volume"
        className={cn(
          "relative flex w-full touch-none select-none items-center"
        )}
        {...rest}
      >
        <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        <Tooltip open delayDuration={0}>
          <TooltipTrigger asChild>
            <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          </TooltipTrigger>
          <TooltipContent
            sideOffset={5}
            key={value![0]}
            className={cn(
              "dialog overflow-hidden rounded-md bg-primary px-1.5 py-1 text-[10px] font-medium text-primary-foreground zoom-in-95"
            )}
            align="end"
            {...tooltip}
          >
            {from}
          </TooltipContent>
        </Tooltip>

        {typeof value![1] === "number" ? (
          <Tooltip open delayDuration={0}>
            <TooltipTrigger asChild>
              <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
            </TooltipTrigger>

            <TooltipContent
              sideOffset={5}
              key={value![1]}
              className={cn(
                "dialog overflow-hidden rounded-md bg-primary px-1.5 py-1 text-[10px] font-medium text-primary-foreground zoom-in-95"
              )}
              align="start"
              hideWhenDetached
              {...tooltip}
            >
              {to}
            </TooltipContent>
          </Tooltip>
        ) : null}
      </SliderPrimitive.Root>
    </TooltipProvider>
  );
};

export default SliderRangeState;
