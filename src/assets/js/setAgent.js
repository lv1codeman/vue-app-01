import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./getFirebaseConfig.js";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { doc, setDoc } from "firebase/firestore";

export async function addAgent(agent, id) {
  console.log("addAgent start...");
  console.log(agent);
  await setDoc(
    doc(db, "agents", id),
    {
      // id: agent.id,
      dept: agent.dept,
      college: agent.college,
      collegeFullName: agent.collegeFullName,
      dept: agent.dept,
      deptFullName: agent.deptFullName,
      agent: agent.agent,
      agentExt: agent.agentExt,
      agentEmail: agent.agentEmail,
      curriAgent: agent.curriAgent,
      curriAgentExt: agent.curriAgentExt,
      curriAgentEmail: agent.curriAgentEmail,
    },
    // {
    //   id: 333,
    //   dept: 333,
    //   college: 333,
    //   collegeFullName: 333,
    //   dept: 333,
    //   deptFullName: 333,
    //   agent: 333,
    //   agentExt: 333,
    //   agentEmail: 333,
    //   curriAgent: 333,
    //   curriAgentExt: 333,
    //   curriAgentEmail: 333,
    // },
    { merge: true }
  );
  return "add success";
}
