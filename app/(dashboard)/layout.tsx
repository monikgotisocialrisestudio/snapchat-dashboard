import Header from "../_components/header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="mx-6">
        <Header />
        {children}
      </div>
    </>
  );
}
