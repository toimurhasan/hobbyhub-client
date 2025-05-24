import React from "react";
import { useLoaderData, useParams } from "react-router";
import GroupDetailRow from "./GroupDetailRow";

const Group = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 max-w-3xl rounded-4xl my-5 mx-auto">
        <img src={data.imageURL} alt="" />
        <table className="table">
          <tbody>
            {/* row 1 */}
            {Object.entries(data).map(([myKey, value]) => {
              return <GroupDetailRow key={myKey} myKey={myKey} value={value} />;
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center my-5">
        <button className=" btn btn-neutral">🎉 Join Group 🎉</button>
      </div>
    </div>
  );
};

export default Group;
