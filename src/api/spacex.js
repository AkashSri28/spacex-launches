import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/launches';

export const fetchLaunches = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
