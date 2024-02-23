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
    <div className='row'>
    <div className="col col-md-3">
    <NavbarAccounts />
    </div>
    <div className="col col-md-9">
    {children}
    </div>
    </div>
  );
}
