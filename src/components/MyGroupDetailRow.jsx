import React from "react";

const MyGroupDetailRow = ({ group, index }) => {
  const { groupName, groupDescription } = group;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{groupName}</td>
      <td>{groupDescription}</td>
      <td className="space-x-2">
        <button className="btn bg-green-400">Update</button>
        <button className="btn bg-red-300">Delete</button>
      </td>
    </tr>
  );
};

export default MyGroupDetailRow;
