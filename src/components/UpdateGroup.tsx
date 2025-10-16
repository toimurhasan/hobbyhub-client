import React, { FormEvent, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

// Define the type for the group data returned by the loader
interface GroupData {
  _id: string;
  groupName: string;
  categorySelect: string;
  meetingLocation: string;
  groupDescription: string;
  maxMembers: number;
  startDate: string; // yyyy-mm-dd format
  imageURL: string;
}

const UpdateGroup: React.FC = () => {
  const navigate = useNavigate();
  const data = useLoaderData() as GroupData; // ✅ Typed loader data
  const {
    _id,
    groupName,
    categorySelect,
    meetingLocation,
    groupDescription,
    maxMembers,
    startDate,
    imageURL,
  } = data;

  const { currentUser } = useContext(AuthContext) ?? { currentUser: null }; // fallback

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const toUpdate = Object.fromEntries(formData.entries());

    fetch(`https://hobbyhub-server-omega.vercel.app/updateGroup/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Group Updated Successfully!");
          navigate("/myGroups");
        } else {
          Swal.fire({
            icon: "error",
            title: "Please Edit Information!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="py-10 flex flex-col justify-center">
      <div className="card bg-base-100 mx-auto w-full max-w-lg shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-semibold">Update Group</h1>
          <form onSubmit={handleSubmit} className="fieldset grid-cols-2">
            <label className="label">Group Name</label>
            <input
              required
              name="groupName"
              type="text"
              className="input w-full"
              defaultValue={groupName}
            />

            <label className="label">Hobby Category</label>
            <select name="categorySelect" className="select w-full" defaultValue={categorySelect}>
              <option disabled>Hobby Category</option>
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Fishing</option>
              <option>Running</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Writing</option>
            </select>

            <label className="label">Description</label>
            <input
              required
              name="groupDescription"
              type="text"
              className="input w-full"
              defaultValue={groupDescription}
            />

            <label className="label">Meeting Location</label>
            <input
              required
              name="meetingLocation"
              type="text"
              className="input w-full"
              defaultValue={meetingLocation}
            />

            <label className="label">Max Members</label>
            <input
              required
              name="maxMembers"
              type="number"
              className="input w-full"
              defaultValue={maxMembers}
            />

            <label className="label">Start Date</label>
            <input
              required
              name="startDate"
              type="date"
              className="input w-full"
              defaultValue={startDate}
            />

            <label className="label">Image URL</label>
            <input
              required
              name="imageURL"
              type="text"
              className="input w-full"
              defaultValue={imageURL}
            />

            <label className="label">Username</label>
            <input
              required
              name="username"
              type="text"
              className="input w-full"
              value={currentUser?.displayName || ""}
              readOnly
            />

            <label className="label">User Email</label>
            <input
              required
              name="email"
              type="text"
              className="input w-full"
              value={currentUser?.email || "No email attached"}
              readOnly
            />

            <button className="btn col-span-2 mx-auto px-16 bg-gray-300 mt-4">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateGroup;
