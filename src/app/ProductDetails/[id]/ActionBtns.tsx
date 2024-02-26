"use client";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import addToCart from "./AddToCart";

type props = { productId: string };

const ActionBtns: React.FC<props> = ({ productId }) => {
  const [userID, setUserID] = useState("");

  const {data:session} = useSession();
  const quantity: number = 1;

  const handleCart = async () => {
    console.log("ADDED: ", productId, userID, quantity);
    await addToCart(productId, userID, quantity);
  };

  const notLoggedIn = () => {
    alert("You are not logged in. Please log in to continue");
  };
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (session) {
      setUserID(session?.user?.email as string);
      localStorage.setItem("userId", session?.user?.email as string);
    } else if (storedUserId) {
      setUserID(storedUserId);
    }
  }, [session]);

  return (
    <>
      {session ? (
        <div>
            <p>{session.user?.email}</p>
          <button className="btn btn-danger text-light fw-bold m-2">BUY</button>
          <button
            type="submit"
            className="btn btn-warning text-secondary fw-bold m-2"
            onClick={handleCart}
          >
            ADD TO CART
          </button>
        </div>
      ) : (
        <div>
          <button className="btn btn-danger text-light fw-bold m-2">BUY</button>
          <button
            type="submit"
            className="btn btn-warning text-secondary fw-bold m-2"
            onClick={notLoggedIn}
          >
            ADD TO CART
          </button>
        </div>
      )}
    </>
  );
};

export default ActionBtns;
