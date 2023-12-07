import apiInstance from '@/utils/axiosInstances';
import create from 'zustand';

interface ILoginAuth {
  username: string;
  password: string;
}

interface ILogout {
  username: string;
}

interface StateLoginAuth {
  isLoading: boolean;
  data: ILoginAuth | null; // Data sebaiknya bukan array jika ini adalah respons login tunggal
  error: any;
}

interface StateLogoutAuth {
  isLoading: boolean;
  data: ILogout | null; // Data sebaiknya bukan array jika ini adalah respons login tunggal
  error: any;
}

interface StoreUser {
  reducerLogin: StateLoginAuth;
  reducerLogout: StateLogoutAuth;
  postLogin: (payload: ILoginAuth) => Promise<any>;
  postLogout: (payload: ILogout) => Promise<void>;
}

const useStoreUser = create<StoreUser>((set) => ({
  reducerLogin: {
    isLoading: false,
    data: null,
    error: null,
  },
  reducerLogout: {
    isLoading: false,
    data: null,
    error: null,
  },

  postLogin: async (payload: ILoginAuth) => {
    set({
      reducerLogin: {
        isLoading: true,
        data: null,
        error: null,
      },
    });

    try {
      const response = await apiInstance.post(
        'https://api.moneytalks.my.id/api/v1/auth/login',
        payload
      );

      const data: ILoginAuth = response.data;
      if (response.status === 200) {
        document.cookie = `userAuth=${JSON.stringify(response.data)}`;
      }

      set({
        reducerLogin: {
          isLoading: false,
          data: data,
          error: null,
        },
      });

      return data;
    } catch (error) {
      set({
        reducerLogin: {
          isLoading: false,
          data: null,
          error: error,
        },
      });
    }
  },

  postLogout: async (payload: ILogout) => {
    set({
      reducerLogout: {
        isLoading: true,
        data: null,
        error: null,
      },
    });

    try {
      const response = await apiInstance.post(
        'https://api.moneytalks.my.id/api/v1/auth/logout',
        payload
      );

      const data = response.data;

      if (response.status === 200) {
        localStorage.removeItem('user');
      }

      set({
        reducerLogout: {
          isLoading: false,
          data: data,
          error: null,
        },
      });
    } catch (error) {
      set({
        reducerLogout: {
          isLoading: false,
          data: null,
          error: error,
        },
      });
    }
  },
}));

export default useStoreUser;
