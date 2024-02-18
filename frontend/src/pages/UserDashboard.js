// frontend/src/pages/UserDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data when the component mounts
    axios.get('/api/users')
      .then(response => {
        // Set the user data to state
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
