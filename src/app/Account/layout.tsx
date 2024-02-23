import type { Metadata } from "next";
import NavbarAccounts from "./NavbarAccounts";
export const metadata: Metadata = {
  title: "iWatch",
  description: "Smartwatch for your health",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarAccounts />
      {children}
    </div>
  );
}
