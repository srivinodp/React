import React from 'react';

const Profile = ({ heading, content }) => {
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const luckyNumber = generateRandomNumber(1, 100);
  const numberOfFollowers = generateRandomNumber(100, 1000);

  return (
    <div>
      <h2>{heading}</h2>
      <p>{content}</p>
      <p>Lucky Number: {luckyNumber}</p>
      <p>Number of Followers: {numberOfFollowers}</p>
      {/* Add additional content or components for the full profile */}
    </div>
  );
};

export default Profile;
