"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import axios from "axios";

const handleSignOut = async () => {
  await signOut();
};

export default function Navbar() {
  const session = useSession().data;

  const handleSignIn = async () => {
    try {
      await signIn("google");
      console.log("logged in");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const setUser = async () => {
    if (session) {
      const session = await useSession().data;
      const userObj = await {
        userName: session?.user?.name,
        userEmail: session?.user?.email,
        userImage: session?.user?.image,
      };
      console.log(userObj);
      // Call your API endpoint
      const response = await axios.post("/api/user", userObj);
      console.log(response);
    }
  };

  useEffect(() => {
    setUser()
  }, [])
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          iWatch
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Shop">
                Shop
              </Link>
            </li>
            {session ? (
              <li className="nav-item">
                <Link className="nav-link" href="/Account">
                  Account
                </Link>
              </li>
            ) : (
              <li></li>
            )}
          </ul>
          <div></div>
          {session ? (
            <div className="d-flex">
              <p className="text-light m-2">Hello {session.user?.name}</p>
              <button
                className="btn btn-outline-danger"
                onClick={handleSignOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <button className="btn btn-outline-primary" onClick={handleSignIn}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
