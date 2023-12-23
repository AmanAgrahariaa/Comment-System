// ProfilePage.js

import React from 'react';
import './Profile.css';


const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <p>
          <strong>Username:</strong> "aman agrahari"
        </p>
        <p>
          <strong>Email:</strong> "aman@gmail.com"
        </p>
        {/* Add other user details as needed */}
      </div>
    </div>
  );
};

export default Profile;
