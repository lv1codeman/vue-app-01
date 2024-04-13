import { doc, setDoc } from "firebase/firestore";

export async function addAgent(db, agent, id) {
  console.log("addAgent start...");
  console.log(agent);
  await setDoc(
    doc(db, "agents", id),
    {
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
    { merge: true }
  );
  return "add success";
}
