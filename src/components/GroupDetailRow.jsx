import React from "react";

const GroupDetailRow = ({ myKey, value }) => {
  return (
    <tr>
      <th>{myKey}</th>
      <td>{value}</td>
    </tr>
  );
};

export default GroupDetailRow;
