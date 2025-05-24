import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import MyGroupDetailRow from "./MyGroupDetailRow";

const MyGroups = () => {
  const { currentUser } = use(AuthContext);
  // console.log(currentUser.displayName);
  const [groupData, setGroupData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/myGroups/${currentUser.displayName}`)
      .then((res) => res.json())
      .then((data) => setGroupData(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl text-center font-semibold my-5">My Groups</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 my-5 max-w-3xl mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Group Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {groupData.map((group, index) => (
              <MyGroupDetailRow key={group._id} group={group} index={index}></MyGroupDetailRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
