import { getAuth, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase Authentication
const auth = getAuth();

// Sign In Function
export const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Returns the signed-in user
    } catch (error) {
      console.error("Error signing in:", error);
      throw error; // Pass the error to handle it in the component
    }
  };
  
  // Sign Up Function
  export const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user; // Returns the newly created user
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };
  
  // Sign Out Function
  export const logOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };