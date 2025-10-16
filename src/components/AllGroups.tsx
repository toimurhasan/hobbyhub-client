import React, { useEffect, useState } from "react";
import GroupCard from "./GroupCard";
import Loader from "./Loader";
import { Group } from "../types/group";



const AllGroups: React.FC = () => {
  const [groupsData, setGroupsData] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://hobbyhub-server-omega.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setGroupsData(data);
      })
      .catch(() => setLoading(false));
  }, []);
  if (loading) return <Loader />;
  else
    return (
      <div className="max-w-6xl mx-4 lg:mx-auto my-5">
        <h1 className="text-2xl text-center font-semibold mb-5">All Groups</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {groupsData.map((group: Group) => (
            <GroupCard key={group._id} group={group}></GroupCard>
          ))}
        </div>
      </div>
    );
};

export default AllGroups;
