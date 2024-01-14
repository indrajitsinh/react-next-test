'use client';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { loginSchema } from '../../validation/loginSchema';
import { authenticateUser } from '../../store/auth/api';
import { useAppDispatch, useAppSelector } from '../../store';
import { useEffect, useState } from 'react';
import { IsNotNullOrEmpty } from '../../utils/utilMethods';
import { loadAuthToken, login } from '@/store/auth/authSlice';
import { redirect } from 'next/navigation';

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({ }) => {
  const dispatch = useAppDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { token } = useAppSelector((state) => state.auth);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const response = await dispatch(authenticateUser(values)).unwrap();
      if (IsNotNullOrEmpty(response.token)) {
        toast.success('Login successful');
        dispatch(login({ token: response.token }));
      }
    },
  });


  useEffect(() => {
    dispatch(loadAuthToken({}));
  }, []);

  useEffect(() => {
    if (token) {
      redirect('/dashboard');
    }
  }, [token]);


  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-xl w-96 bg-white border-t-8 border-blue-500'>
        <h2 className='text-2xl font-semibold mb-4'>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="username" className='block text-gray-700 text-sm font-semibold mb-1'>Username</label>
            <input
              type='text'
              className='w-full border rounded px-3 py-2'
              placeholder='Enter your username'
              id="username"
              {...formik.getFieldProps('username')}
            />
            {formik.errors.username && formik.touched?.username ? (
              <div className='mt-1 text-red-600'>{formik.errors.username}</div>
            ) : null}
          </div>
          <div className='mb-4 '>
            <label htmlFor="password" className='block text-gray-700 text-sm font-semibold mb-1'>Password</label>
            <div className='relative'>
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                className='w-full border rounded px-3 py-2 '
                placeholder='Enter your password'
                id="password"
                {...formik.getFieldProps('password')}
              />

              <span
                className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <svg
                    className='h-5 text-gray-500'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'
                  >
                    <path
                      fill='currentColor'
                      d='M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z'
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className='h-5 text-gray-500'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 640 512'
                  >
                    <path
                      fill='currentColor'
                      d='M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z'
                    ></path>
                  </svg>
                )}
              </span>
            </div>
            {formik.errors?.password && formik.touched?.password ? (
              <div className='mt-1 text-red-600'>{formik.errors.password}</div>
            ) : null}
          </div>
          {formik.isSubmitting ? (
            <button
              disabled
              type='button'
              className='d-flex mt-5 w-full px-2 py-2 me-2 text-sm font-medium text-white bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 items-center'
            >
              <svg
                aria-hidden='true'
                role='status'
                className='inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='#1C64F2'
                />
              </svg>
              Loading...
            </button>
          ) : (
            <button
              name="login"
              type='submit'
              className='mt-5 w-full bg-blue-500 text-white px-4 py-2 rounded text-sm font-medium'
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Loading...' : 'Login'}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
