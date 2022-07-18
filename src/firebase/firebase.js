import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZSrQRnJFq9TUNaxlZixgHF6zagBAteRQ",
  authDomain: "nikostore-5a65f.firebaseapp.com",
  projectId: "nikostore-5a65f",
  storageBucket: "nikostore-5a65f.appspot.com",
  messagingSenderId: "556260407268",
  appId: "1:556260407268:web:0cdfe74f5670e56b8af9f1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);