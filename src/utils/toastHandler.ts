import { toast } from 'react-toastify';

export const toastHandler = (err: any) => {
  const keys = Object.keys(err?.errors);
  if (keys?.length > 0) {
    return toast.error(err?.errors[keys[0]]);
  }
  return toast.error(err?.message);
};
