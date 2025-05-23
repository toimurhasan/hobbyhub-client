import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const CreateGroup = () => {
  const { currentUser } = use(AuthContext);
  // console.log(currentUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // console.log(data);

    fetch("https://hobbyhub-server-omega.vercel.app/createGroup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Your Group Has Been Created!",
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  return (
    <div>
      <div
        className="py-10
       flex flex-col justify-center"
      >
        <div className="card bg-base-100 mx-auto w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-semibold">Create Group</h1>
            <form onSubmit={handleSubmit} className="fieldset grid-cols-2">
              <label className="label">Group Name</label>
              <input
                required
                name="groupName"
                type="text"
                className="input w-full"
                placeholder="Enter Group Name"
              />
              <label className="label">Hobby Category</label>
              <select name="categorySelect" defaultValue="Pick a color" className="select w-full">
                <option disabled={true}>Hobby Category</option>
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
                placeholder="Enter Group Description"
              />
              <label className="label">Meeting Location</label>
              <input
                required
                name="meetingLocation"
                type="text"
                className="input w-full"
                placeholder="Enter Meeting Location"
              />
              <label className="label">Max Members</label>
              <input
                required
                name="maxMembers"
                type="number"
                className="input w-full"
                placeholder="Enter Max Members"
              />
              <label className="label">Start Date</label>
              <input
                required
                name="startDate"
                type="date"
                className="input w-full"
                placeholder="Enter Start Date"
              />
              <label className="label">Image URL</label>
              <input
                required
                name="imageURL"
                type="text"
                className="input w-full"
                placeholder="Enter Image URL"
              />
              <label className="label">Username</label>
              <input
                required
                name="username"
                type="text"
                className="input w-full"
                value={currentUser.displayName}
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

              <button className="btn col-span-2 mx-auto px-16 bg-gray-300 mt-4">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
