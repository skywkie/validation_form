import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyALH3nxlb3qZYNLyavJLppj74YuWLfxygs",
   authDomain: "test1-7f0c6.firebaseapp.com",
   projectId: "test1-7f0c6",
   storageBucket: "test1-7f0c6.appspot.com",
   messagingSenderId: "993681700698",
   appId: "1:993681700698:web:1e62a9f7512b741d0ca563",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
