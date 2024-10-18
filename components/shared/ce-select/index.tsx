import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";

type propType = {
  label?: string;
  info?: React.ReactNode;
  error?: React.ReactNode;
  htmlFor?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  icon?: React.ReactNode; // Add icon prop for the select box
  options: {
    label: React.ReactNode;
    value: string;
  }[];
  placeholder?: string;
  triggerProps?: React.ComponentProps<typeof SelectTrigger>;
  itemClick?: (value: string) => void;
} & React.ComponentProps<typeof Select>;

function CESelect(props: propType) {
  const {
    error,
    // info,
    label,
    htmlFor,
    // suffix,
    // prefix,
    icon, // Destructure the icon prop
    options,
    placeholder,
    triggerProps = { className: "w-full", size: "lg" },
    itemClick = () => {},
    ...rest
  } = props;

  return (
    <div className="flex flex-col bg-subCard">
      {label ? (
        <div className="mb-2.5 flex items-center gap-1">
          <Label htmlFor={htmlFor}>{label}</Label>
        </div>
      ) : null}
      <Select {...rest}>
        <SelectTrigger
          {...triggerProps}
          className="flex items-center text-btn-foreground"
        >
          {" "}
          {/* Align items */}
          {icon && <span className="mr-2">{icon}</span>} {/* Render the icon */}
          <SelectValue
            placeholder={
              <span className="text-white">Select {placeholder ?? "..."}</span>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.length > 0 ? (
              options.map((i) => (
                <SelectItem
                  value={i.value}
                  key={i.value}
                  onClick={() => {
                    itemClick(i.value);
                  }}
                >
                  {i.label}
                </SelectItem>
              ))
            ) : (
              <SelectLabel>No option available</SelectLabel>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      {error && <p className="text-venetian-red mt-0.5 text-sm">{error}</p>}
    </div>
  );
}

export default CESelect;
