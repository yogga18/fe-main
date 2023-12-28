'use client';

import useStoreUser from '@/store/auth/auth';
import useStoreSavings from '@/store/savings';
import { clearCookie } from '@/utils/cookies';

const Dashboard = () => {
  const { postLogout } = useStoreUser();
  const { getProductByUser } = useStoreSavings();

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

  const handelGet = () => {
    getProductByUser().then((response: any) => {
      console.log('response', response);
    });
  };

  return (
    <div>
      <div className='flex gap-3 mx-5'>
        <button
          className='bg-red-500 p-3 rounded-md'
          onClick={() => {
            handleOut();
          }}
        >
          out
        </button>
        <button
          className='bg-blue-500 p-3 rounded-md'
          onClick={() => {
            handelGet();
          }}
        >
          Test
        </button>
      </div>
      <h5 className='text-center'>Dashboard</h5>
    </div>
  );
};

export default Dashboard;
