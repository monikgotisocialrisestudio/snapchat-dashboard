"use client";
import { redirect } from "@/actions/navigate/redirect";
// import Spinner from "@/components/ui/spinner";
import { useToast } from "@/hooks/use-toast";
// import { PUBLIC_PATH_LIST } from "@/lib/constant";
import { useAppDispatch } from "@/provider/store";
import { setAuthData } from "@/provider/store/authentication";
import { useValidateTokenMutation } from "@/provider/store/authentication/api";
import { AuthUserType } from "@/provider/store/authentication/authentication.type";
import { useAuthStore } from "@/provider/store/authentication/useAuthStore";
// import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const WithAuth = ({
  children,
  licenseKey,
}: {
  children: React.ReactNode;
  licenseKey: string;
}) => {
  // const path = usePathname();
  const { toast } = useToast();
  const { authCheck, authenticated } = useAuthStore();
  const dispatch = useAppDispatch();
  const [validateToken] = useValidateTokenMutation();

  const handleVerifyLicenseKey = async () => {
    try {
      const res = await validateToken(licenseKey);
      if (res.data?.status) {
        dispatch(
          setAuthData({
            profile: res.data.data as AuthUserType,
            authCheck: true,
            authenticated: true,
            licenseKey: licenseKey,
            // redirectTo: PUBLIC_PATH_LIST.includes(path) ? redirectTo : path,
          })
        );
      } else {
        throw new Error("Invalid license key");
      }
    } catch (err) {
      console.log(err);
      toast({
        description: "Invalid license key",
      });
      dispatch(
        setAuthData({
          authCheck: true,
          authenticated: false,
          licenseKey: "",
          //   redirectTo: DASHBOARD_TABS.ACCOUNT_MANAGER,
        })
      );
    }
  };

  useEffect(() => {
    if (licenseKey) {
      handleVerifyLicenseKey();
    } else {
      dispatch(
        setAuthData({
          authCheck: true,
          authenticated: false,
          licenseKey: "",
          //   redirectTo: DASHBOARD_TABS.ACCOUNT_MANAGER,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (authCheck && !authenticated) {
      redirect("/license-key");
    } else if (authCheck && authenticated) {
      //   redirect(redirectTo);
      redirect("/dashboard");
    }
  }, [authCheck, authenticated]);

  // if (!authenticated && !PUBLIC_PATH_LIST.includes(path)) {
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       <div className="flex flex-col items-center justify-center">
  //         <Spinner />
  //       </div>
  //     </div>
  //   );
  // }

  // if ((!authCheck || authenticated) && PUBLIC_PATH_LIST.includes(path)) {
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       <div className="flex flex-col items-center justify-center">
  //         <Spinner />
  //       </div>
  //     </div>
  //   );
  // }

  // if (!authCheck) {
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       <div className="flex flex-col items-center justify-center">
  //         <Spinner />
  //       </div>
  //     </div>
  //   );
  // }

  return <>{children}</>;
};

export default WithAuth;
