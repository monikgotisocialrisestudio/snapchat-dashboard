"use server";

import { redirect as NextRedirect } from "next/navigation";

export async function redirect(path: string) {
  NextRedirect(path);
}
