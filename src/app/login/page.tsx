'use client';
import Login from '../section/Login';
import { ToastContainer, Slide } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css'

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Login />

      <ToastContainer
        position='top-right'
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Slide}
        pauseOnHover
      />
    </>
  );
};

export default Home;
