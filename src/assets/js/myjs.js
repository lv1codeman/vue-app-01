// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBcRGOGcrY0bJgEw8Gp3rm5zq0cdLfRzAE",
  authDomain: "profound-iris-418105.firebaseapp.com",
  projectId: "profound-iris-418105",
  storageBucket: "profound-iris-418105.appspot.com",
  messagingSenderId: "168929492497",
  appId: "1:168929492497:web:3dd54b20d88a067f02bbb0",
  measurementId: "G-KQP85TR1FB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

import { collection, getDocs } from "firebase/firestore";

const users = [];

console.log("firebaseConfig.apiKey: " + firebaseConfig.apiKey);

const querySnapshot = await getDocs(collection(db, "agents"));
querySnapshot.forEach((doc) => {
  const obj = {
    id: doc.id,
    dept: doc.data().dept,
    college: doc.data().college,
    collegeFullName: doc.data().collegeFullName,
    dept: doc.data().dept,
    deptFullName: doc.data().deptFullName,
    agent: doc.data().agent,
    agentExt: doc.data().agentExt,
    agentEmail: doc.data().agentEmail,
    curriAgent: doc.data().curriAgent,
    curriAgentExt: doc.data().curriAgentExt,
    curriAgentEmail: doc.data().curriAgentEmail,
  };
  users.push(obj);
});

export default users;
