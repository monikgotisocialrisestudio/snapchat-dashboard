"use client";
// import setLicenseKey from "@/actions/public/cookies/setLicenseKey";
// import { redirect } from "@/actions/public/navigate/redirect";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import Spinner from "@/components/ui/spinner";
// import { useToast } from "@/hooks/use-toast";
// import { DASHBOARD_TABS } from "@/lib/constant";
// import { useAppDispatch } from "@/provider/store";
// import { setAuthData } from "@/provider/store/authentication";
// import { useValidateTokenMutation } from "@/provider/store/authentication/api";
// import { AuthUserType } from "@/provider/store/authentication/authentication.type";
// import { useAuthStore } from "@/provider/store/authentication/useAuthStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const licenseKeySchema = z.object({
  licenseKey: z.string().trim().min(1, { message: "Enter valid license key" }),
});

const LicenseKeyForm = () => {
  //   const { toast } = useToast();
  //   const { loading, redirectTo } = useAuthStore();
  //   const dispatch = useAppDispatch();
  //   const [validateToken] = useValidateTokenMutation();
  const router = useRouter();

  const form = useForm<z.infer<typeof licenseKeySchema>>({
    resolver: zodResolver(licenseKeySchema),
    defaultValues: {
      licenseKey: "",
    },
  });

  async function onSubmit(values: z.infer<typeof licenseKeySchema>) {
    console.log(values);
    router.push("/dashboard");
    // const res = await validateToken(values.licenseKey);
    // if (res.data?.status) {
    //   setLicenseKey(values.licenseKey);
    //   dispatch(
    //     setAuthData({
    //       profile: res.data.data as AuthUserType,
    //       authCheck: true,
    //       authenticated: true,
    //       licenseKey: values.licenseKey,
    //     })
    //   );
    //   redirect(redirectTo);
    // } else {
    //   toast({
    //     description: res.data?.message ?? "Invalid license key",
    //   });
    // }
  }

  return (
    <div className="container mx-auto flex h-screen w-full flex-col items-center justify-center gap-10">
      <h1 className="mt-[-150px] scroll-m-20 text-5xl font-semibold tracking-tight">
        Snapchat Dashboard
      </h1>
      <Form {...form}>
        <form
          className="flex w-full max-w-md flex-col space-y-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="licenseKey"
            render={({ field }) => (
              <FormItem>
                <FormLabel>License Key</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="off"
                    placeholder="license key"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default LicenseKeyForm;
