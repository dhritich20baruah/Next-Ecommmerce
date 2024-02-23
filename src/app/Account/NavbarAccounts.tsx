import React from "react";
import Link from "next/link";

const NavbarAccounts = () => {
  return (
    <div className="d-flex flex-column p-3">
      <div className="my-2">
      <Link href="/Account/Profile">
        <button className="btn btn-outline-danger w-75">Profile</button>
      </Link>
      </div>
      <div className="my-2">
      <Link href="/Account/Cart">
        <button className="btn btn-outline-danger w-75">Cart</button>
      </Link>
      </div>
      <div className="my-2">
      <Link href="/Account/Orders">
        <button className="btn btn-outline-danger w-75">Orders</button>
      </Link>
      </div>
      <div className="my-2">
      <Link href="/Account/Addresses">
        <button className="btn btn-outline-danger w-75">Address</button>
      </Link>
      </div>
    </div>
  );
};

export default NavbarAccounts;
