import React, { useEffect, useState } from 'react';
import { fetchLaunches } from '../api/spacex';
import LaunchCard from './LaunchCard';
import { useDispatch } from 'react-redux';

const LaunchList = () => {
    const dispatch = useDispatch();
  const [launches, setLaunches] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [launchYear, setLaunchYear] = useState('');
  const [launchStatus, setLaunchStatus] = useState('');

  const [filteredLaunches, setFilteredLaunches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    const getLaunches = async () => {
        setLoading(true);
        setError('');
        try {
          const data = await fetchLaunches();
          setLaunches(data);
        } catch (err) {
          setError('Failed to fetch launches');
        } finally {
          setLoading(false);
        }
    };

    getLaunches();
  }, []);

  useEffect(() => {
    const filterLaunches = () => {
      const filtered = launches.filter(
        (launch) =>
          launch.mission_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (!launchYear || launch.launch_year === launchYear) &&
          (!launchStatus || launch.launch_success === (launchStatus === 'true'))
      );
      setFilteredLaunches(filtered);
    };

    filterLaunches();
  }, [launches, searchTerm, launchYear, launchStatus]);


  return (
    <div className="max-w-4xl mx-auto p-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search launches"
        className="w-full p-2 mb-4 border rounded"
      />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            value={launchYear}
            onChange={(e) => setLaunchYear(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Years</option>
            {[...new Set(launches.map((launch) => launch.launch_year))].map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <select
            value={launchStatus}
            onChange={(e) => setLaunchStatus(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Statuses</option>
            <option value="true">Success</option>
            <option value="false">Failure</option>
          </select>
        </div>

        <h2>Result(s): {filteredLaunches.length}</h2> 

        {loading && <div className="text-center text-gray-700">Loading...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
        
      <div className="grid grid-cols-1 gap-4">

        {!loading && !error && filteredLaunches.length === 0 && (
            <div className="text-center text-gray-700">No launches found.</div>
        )} 

        {!loading && !error && filteredLaunches.length > 0 && ( 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredLaunches.map((launch) => (
                    <LaunchCard key={launch.flight_number} launch={launch} />
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default LaunchList;
