import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBWj1DFhxV182q9206XnlqAj_4q0WEuBl0",
authDomain: "tienda-de-autos-4e32e.firebaseapp.com",
projectId: "tienda-de-autos-4e32e",
storageBucket: "tienda-de-autos-4e32e.appspot.com",
messagingSenderId: "494003708443",
appId: "1:494003708443:web:8c90db7ce89ddfc68f4ebe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);