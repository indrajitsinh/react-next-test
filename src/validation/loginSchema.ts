import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'User Name is too short')
    .required('User Name is required'),
  password: Yup.string()
    .min(2, 'Password is too short')
    .required('Password is required'),
});
