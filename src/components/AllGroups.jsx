import React, { useEffect, useState } from "react";
import GroupCard from "./GroupCard";
import Loader from "./Loader";
// import Group from "./Group";

const AllGroups = () => {
  const [groupsData, setGroupsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://hobbyhub-server-omega.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setGroupsData(data);
      });
  }, []);
  if (loading) return <Loader />;
  else
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
