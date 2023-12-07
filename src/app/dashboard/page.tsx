'use client';

import useStoreUser from '@/store/auth/auth';
import { clearCookie } from '@/utils/cookies';

const Dashboard = () => {
  const { postLogout } = useStoreUser();

  const handleOut = () => {
    const payload = {
      username: 'asep',
    };
    postLogout(payload).then((response) => {
      console.log('response', response);
      clearCookie('userAuth');
      location.reload();
    });
  };

  return (
    <div>
      <button
        className='bg-red-500 p-3 rounded-md'
        onClick={() => {
          handleOut();
        }}
      >
        out
      </button>
      <h5 className='text-center'>Dashboard</h5>
    </div>
  );
};

export default Dashboard;
