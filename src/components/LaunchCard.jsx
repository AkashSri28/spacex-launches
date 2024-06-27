import React from 'react';

const LaunchCard = ({ launch }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <img src={launch.links.mission_patch} alt={launch.mission_name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-lg font-bold">Title: {launch.mission_name}</h3>
      <p>Launch Date: {new Date(launch.launch_date_local).toLocaleDateString('en-GB')}</p>
      <p className="text-sm text-gray-700">Rocket: {launch.rocket.rocket_name}</p>
      <p className="text-sm text-gray-700">Launch Site: {launch.launch_site.site_name}</p>
    </div>
  );
};

export default LaunchCard;
