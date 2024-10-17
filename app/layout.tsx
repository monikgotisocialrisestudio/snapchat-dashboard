import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/provider";
// import WithAuth from "./hoc/with-auth";
// import { LICENSE_KEY } from "@/lib/constant";
// import { cookies } from "next/headers";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "block",
});

export const metadata: Metadata = {
  title: "SnapChat-Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookie = cookies();
  // const licenseKey = cookie.get(LICENSE_KEY)?.value ?? "";
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        <StoreProvider>
          {/* <WithAuth licenseKey={licenseKey}> */}
          {children}
          {/* </WithAuth> */}
        </StoreProvider>
      </body>
    </html>
  );
}
