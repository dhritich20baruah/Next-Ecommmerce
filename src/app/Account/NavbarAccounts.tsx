import React from "react";
import Link from "next/link";

const NavbarAccounts = () => {
  return (
    <div className="d-flex flex-column">
      <div>
      <Link href="/Account/Profile">
        <button className="btn btn-danger-outline">Profile</button>
      </Link>
      </div>
      <div>
      <Link href="/Account/Cart">
        <button className="btn btn-danger-outline">Cart</button>
      </Link>
      </div>
      <div>
      <Link href="/Account/Orders">
        <button className="btn btn-danger-outline">Orders</button>
      </Link>
      </div>
      <div>
      <Link href="/Account/Addresses">
        <button className="btn btn-danger-outline">Addresses</button>
      </Link>
      </div>
    </div>
  );
};

export default NavbarAccounts;
