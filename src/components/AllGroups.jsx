import React, { useEffect, useState } from "react";
import GroupCard from "./GroupCard";
// import Group from "./Group";

const AllGroups = () => {
  const [groupsData, setGroupsData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/groups")
      .then((res) => res.json())
      .then((data) => setGroupsData(data));
  }, []);
  return (
    <div>
      <h1>All Groups</h1>
      <div className="grid grid-cols-3 gap-4">
        {groupsData.map((group) => (
          <GroupCard key={group._id} group={group}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroups;
