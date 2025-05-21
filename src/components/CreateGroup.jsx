import React from "react";

const CreateGroup = () => {
  return (
    <div>
      <div
        className="py-10
       flex flex-col justify-center"
      >
        <div className="card bg-base-100 mx-auto w-full max-w-lg shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-semibold">Create Group</h1>
            <fieldset className="fieldset grid-cols-2">
              <label className="label">Group Name</label>
              <input type="text" className="input w-full" placeholder="Enter Group Name" />
              <label className="label">Hobby Category</label>
              <select defaultValue="Pick a color" className="select w-full">
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
              <input type="text" className="input w-full" placeholder="Enter Group Description" />
              <label className="label">Meeting Location</label>
              <input type="text" className="input w-full" placeholder="Enter Meeting Location" />
              <label className="label">Max Members</label>
              <input type="text" className="input w-full" placeholder="Enter Max Members" />
              <label className="label">Start Date</label>
              <input type="date" className="input w-full" placeholder="Enter Start Date" />
              <label className="label">Image URL</label>
              <input type="text" className="input w-full" placeholder="Enter Image URL" />
              <label className="label">Username</label>
              <input type="text" className="input w-full" placeholder="Tamim" />
              <label className="label">User Email</label>
              <input type="text" className="input w-full" placeholder="2imur.hasan@gmail.com" />

              <button className="btn col-span-2 mx-auto px-16 bg-gray-300 mt-4">Create</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
