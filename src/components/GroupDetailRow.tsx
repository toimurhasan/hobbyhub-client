import React from "react";

// ✅ 1. Define props interface
interface GroupDetailRowProps {
  myKey: string;
  value: string | number | boolean | null | undefined; // cover common types
}

const GroupDetailRow: React.FC<GroupDetailRowProps> = ({ myKey, value }) => {
  return (
    <tr>
      <th>{myKey}</th>
      <td>{value?.toString()}</td> {/* convert value to string safely */}
    </tr>
  );
};

export default GroupDetailRow;
