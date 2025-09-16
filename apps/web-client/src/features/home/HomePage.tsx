import React from 'react';
import { useUserStore } from '../../store/userStore';

const HomePage: React.FC = () => {
  const user = useUserStore((s) => s.user);
  return (
    <div>
      <h1>FirstLight Wake-Up Challenge</h1>
      {!!user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
    </div>
  );
};
export default HomePage;