import { useAppDispatch } from '@/store';
import { logout } from '@/store/auth/authSlice';
import React from 'react';

export default function Header() {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout({}));

  }
  return <div className='w-full'>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">React Test App</span>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}>Log out</button>
        </div>
      </div>

    </nav>
  </div>;
}
