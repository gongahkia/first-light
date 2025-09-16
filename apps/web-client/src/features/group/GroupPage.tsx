import React from 'react';
import { useParams } from 'react-router-dom';

const GroupPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Group {id}</h2>
      {/* Group info, check-in UI, leaderboard */}
    </div>
  );
};
export default GroupPage;