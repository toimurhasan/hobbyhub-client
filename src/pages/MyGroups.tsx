import React, { useEffect, useState, useContext } from "react"; 
import { AuthContext } from "../contexts/AuthContext";
import MyGroupDetailRow from "../components/MyGroupDetailRow";
import Swal from "sweetalert2";
import { Link } from "react-router";
import Loader from "../components/Loader";

interface Group {
  _id: string;
  groupName: string;
  groupDescription: string;
  categorySelect: string;
  imageURL: string;
  meetingLocation: string;
}

const MyGroups: React.FC = () => {
  const { currentUser } = useContext(AuthContext) as { currentUser: { displayName: string } };

  const [groupData, setGroupData] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser?.displayName) return;
    fetch(`https://hobbyhub-server-omega.vercel.app/myGroups/${currentUser.displayName}`)
      .then((res) => res.json())
      .then((data: Group[]) => {
        setGroupData(data);
        setLoading(false);
      });
  }, [currentUser?.displayName]);

  const handleDelete = (id: string) => {
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

  if (loading) return <Loader />;

  if (groupData.length === 0)
    return (
      <div className="flex justify-center h-[calc(100vh-(65px+220px))] items-center">
        <p className="text-center italic">
          No group data available. <br /> Please go to{" "}
          <Link className="link link-primary" to={"/createGroup"}>
            create group
          </Link>{" "}
          section to create group.
        </p>
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold my-5">My Groups</h1>
      <div className="overflow-x-auto rounded-box border border-gray-200 shadow-xl bg-base-100 my-5 max-w-3xl mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Group Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {groupData.map((group, index) => (
              <MyGroupDetailRow
                key={group._id}
                group={group}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroups;
