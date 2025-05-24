import React from "react";
import { useLoaderData, useParams } from "react-router";

const Group = () => {
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h1>Single Group</h1>
    </div>
  );
};

export default Group;
