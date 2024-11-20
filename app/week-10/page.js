"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-center">
        {user ? (
          <div>
            <p className="text-lg font-semibold mb-4 text-gray-200">
              Welcome,
              <span className="text-indigo-400"> {user.displayName}</span> (
              {user.email})
            </p>
            <button
              onClick={firebaseSignOut}
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-300"
            >
              Sign out
            </button>

            <Link
              href="/week-10/shopping-list"
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 transition duration-300"
            >
              ShoppingList
            </Link>
          </div>
        ) : (
          <div>
            <p className="text-lg font-medium mb-4 text-gray-200">
              Please sign in
            </p>
            <button
              onClick={gitHubSignIn}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition duration-300"
            >
              Sign in with GitHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}