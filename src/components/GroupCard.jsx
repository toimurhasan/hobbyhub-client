import React from "react";
import { useNavigate } from "react-router";

const GroupCard = ({ group, hideBtn }) => {
  const navigate = useNavigate();
  const {
    _id,
    groupName,
    categorySelect,
    meetingLocation,
    maxMembers,
    startDate,
    imageURL,
    username,
    email,
  } = group;
  return (
    <div>
      <div className="card bg-base-100 image-full  shadow-sm">
        <figure>
          <img src={imageURL} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{groupName}</h2>
          <p>
            {groupName} is a focused community led by {username} (contact: {email}), bringing
            together up to {maxMembers} members who share a passion for {categorySelect}. Starting
            from {startDate}, we’ll gather at {meetingLocation} to learn, collaborate, and grow in a
            supportive space. Whether you're just starting out or already experienced, this group
            offers meaningful connections and purposeful engagement.
          </p>
          <div className="card-actions">
            {!hideBtn && (
              <button
                onClick={() => {
                  navigate(`/group/${_id}`);
                }}
                className="btn btn-primary"
              >
                See More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
