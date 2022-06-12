import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDKHdwAU5zbUCPRYxxn-lJodwX15RfdDf0",
  authDomain: "foodorderapp-c2463.firebaseapp.com",
  databaseURL: "https://foodorderapp-c2463-default-rtdb.firebaseio.com",
  projectId: "foodorderapp-c2463",
  storageBucket: "foodorderapp-c2463.appspot.com",
  messagingSenderId: "844960149727",
  appId: "1:844960149727:web:422a2b7ed4cbf07f7f796a",
  measurementId: "G-9HTZP230QV",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
