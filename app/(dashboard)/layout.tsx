import Header from "../_components/header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="m-auto">
        <Header />
        {children}
      </div>
    </>
  );
}
