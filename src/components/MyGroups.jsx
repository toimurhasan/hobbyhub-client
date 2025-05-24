import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import MyGroupDetailRow from "./MyGroupDetailRow";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loader from "./Loader";

const MyGroups = () => {
  const { currentUser } = use(AuthContext);

  // console.log(currentUser.displayName);
  const [groupData, setGroupData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://hobbyhub-server-omega.vercel.app/myGroups/${currentUser.displayName}`)
      .then((res) => res.json())
      .then((data) => {
        setGroupData(data);
        setLoading(false);
      });
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobbyhub-server-omega.vercel.app/group/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingGroups = groupData.filter((group) => group._id !== id);
              setGroupData(remainingGroups);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  if (loading) {
    return <Loader />;
  } else if (groupData.length === 0) {
    return (
      <>
        <div className="flex justify-center h-[calc(100vh-(65px+220px))] items-center">
          <p className="text-center italic">
            No group data available. <br /> Please go to{" "}
            <Link className="link link-primary" to={"/createGroup"}>
              create group
            </Link>{" "}
            section to create group.
          </p>
        </div>
      </>
    );
  } else
    return (
      <div>
        <h1 className="text-2xl text-center font-semibold my-5">My Groups</h1>
        <div className="overflow-x-auto rounded-box border  border-gray-200 shadow-xl bg-base-100 my-5 max-w-3xl mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Group Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {groupData.map((group, index) => (
                <MyGroupDetailRow
                  key={group._id}
                  group={group}
                  index={index}
                  handleDelete={handleDelete}
                ></MyGroupDetailRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyGroups;
