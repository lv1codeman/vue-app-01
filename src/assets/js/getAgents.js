import { collection, getDocs } from "firebase/firestore";

export async function getAllAgents(db) {
  return new Promise((resolve, reject) => {
    const users = [];

    getDocs(collection(db, "agents"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const obj = {
            id: doc.id,
            dept: doc.data().dept,
            college: doc.data().college,
            collegeFullName: doc.data().collegeFullName,
            agent: doc.data().agent,
            agentExt: doc.data().agentExt,
            agentEmail: doc.data().agentEmail,
            curriAgent: doc.data().curriAgent,
            curriAgentExt: doc.data().curriAgentExt,
            curriAgentEmail: doc.data().curriAgentEmail,
          };
          users.push(obj);
        });
        resolve(users);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
