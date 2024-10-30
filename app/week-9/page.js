// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
 
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
await gitHubSignIn();
 
// Sign out of Firebase
await firebaseSignOut();
 
// Display some of the user's information
<p>
  Welcome, {user.displayName} ({user.email})
</p>;