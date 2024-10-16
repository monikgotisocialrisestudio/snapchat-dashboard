"use client";
import { SECTION_TITLE } from "@/lib/classNames";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="mx-auto flex justify-between py-6 px-5">
        <div className="flex items-center gap-2">
          <h3 className={SECTION_TITLE}>Dashboard</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
