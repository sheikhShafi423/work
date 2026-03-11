import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAwAGx6-k17r5k8WbOI9gxh36O3iGqC3k",
  authDomain: "for-work-bd.firebaseapp.com",
  projectId: "for-work-bd",
  storageBucket: "for-work-bd.firebasestorage.app",
  messagingSenderId: "195021249558",
  appId: "1:195021249558:web:254ea21bf66dc3eb84a937",
  measurementId: "G-4STMV9KZFT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();