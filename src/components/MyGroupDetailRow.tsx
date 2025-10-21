import React from "react";
import { useNavigate } from "react-router";

interface Group {
  _id: string;
  groupName: string;
  groupDescription: string;
  categorySelect: string;
  imageURL: string;
  meetingLocation: string;
}

interface MyGroupDetailRowProps {
  group: Group;
  index: number;
  handleDelete: (id: string) => void;
}

const MyGroupDetailRow: React.FC<MyGroupDetailRowProps> = ({ group, index, handleDelete }) => {
  const { _id, groupName, groupDescription, categorySelect, imageURL, meetingLocation } = group;
  const navigate = useNavigate();

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imageURL} alt="Group" /> 
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
        <button
          onClick={() => navigate(`/updateGroup/${_id}`)}
          className="btn"
        >
          Update
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyGroupDetailRow;
