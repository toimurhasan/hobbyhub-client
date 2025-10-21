import React from "react";


interface GroupDetailRowProps {
  myKey: string;
  value: string | number | boolean | null | undefined;
}

const GroupDetailRow: React.FC<GroupDetailRowProps> = ({ myKey, value }) => {
  return (
    <tr>
      <th>{myKey}</th>
      <td>{value?.toString()}</td> 
    </tr>
  );
};

export default GroupDetailRow;
