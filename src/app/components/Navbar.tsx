"use client"
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react'

const handleSignIn = async () => {
  await signIn();
}
const handleSignOut = async () => {
  await signOut();
}
export default function Navbar() {
  const session = useSession().data;

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
              <Link className="nav-link active" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/Shop">
                Shop
              </Link>
            </li>
            {session ? 
            <li className="nav-item">
              <Link className="nav-link" href="/Dashboard">
                Dashboard
              </Link>
            </li>
            :
            <li></li>
            }
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
            </li>
          </ul>
          {session ?
          <div className="d-flex">
            <p className="text-light m-2">Hello {session.user?.name}</p>
          <button className="btn btn-outline-danger" onClick={handleSignOut}>Log Out</button>
          </div>
          :
          <button className="btn btn-outline-primary" onClick={handleSignIn}>Login</button>
          }
          </div>
      </div>
    </nav>
  );
}
