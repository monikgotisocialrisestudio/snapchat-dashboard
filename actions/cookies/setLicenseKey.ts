"use server";

import { cookies } from "next/headers";
import { LICENSE_KEY } from "@/lib/constant";

function setLicenseKey(key: string) {
  // Set the cookie
  cookies().set({
    name: LICENSE_KEY,
    value: key,
    httpOnly: true,
    path: "/",
    secure: true, // Make sure to set this in production
    maxAge: 365 * 86400,
  });

  return {
    success: true,
    data: "Cookie set successfully",
  };
}

export default setLicenseKey;
