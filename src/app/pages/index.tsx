'use client';
import Login from '../section/Login';
import { redirect } from 'next/navigation';

const Home: React.FC = () => {
  const handleLogin = () => {
    redirect('/dashboard');
  };

  return (
    <>
      <Login onLogin={handleLogin} />
    </>
  );
};

export default Home;
