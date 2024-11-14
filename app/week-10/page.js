// page.js
"use client";
import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";

const MainPage = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded">
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded">
          Sign in with GitHub
        </button>
      )}
    </div>
  );
};

export default MainPage;