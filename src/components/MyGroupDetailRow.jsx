import React from "react";

const MyGroupDetailRow = ({ group, index }) => {
  const { groupName, groupDescription, categorySelect, imageURL, meetingLocation } = group;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imageURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{groupName}</div>
            <div className="text-sm opacity-50">{meetingLocation}</div>
          </div>
        </div>
      </td>
      <td>
        {groupDescription}
        <br />
        <span className="badge badge-ghost badge-sm">{categorySelect}</span>
      </td>
      <td className="space-x-2">
        <button className="btn">Update</button>
        <button className="btn">Delete</button>
      </td>
    </tr>
  );
};

export default MyGroupDetailRow;
