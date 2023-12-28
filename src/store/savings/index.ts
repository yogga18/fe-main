import apiInstance from '@/utils/axiosInstances';
import create from 'zustand';

interface InterfaceReducerSavings {
  isLoading: boolean;
  data: [];
  error: any;
}
interface IStoreSavings {
  reducerSavings: InterfaceReducerSavings;
  getProductByUser: () => Promise<any>;
}

const useStoreSavings = create<IStoreSavings>((set) => ({
  reducerSavings: {
    isLoading: false,
    data: [],
    error: null,
  },

  getProductByUser: async () => {
    set({
      reducerSavings: {
        isLoading: true,
        data: [],
        error: null,
      },
    });

    const getCookieValue = (cookieName: string) => {
      const name = cookieName + '=';
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieArray = decodedCookie.split(';');
      for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim();
        if (cookie.indexOf(name) === 0) {
          const result = cookie.substring(name.length, cookie.length);
          return JSON.parse(result);
        }
      }
      return '';
    };

    const nilaiCookie = getCookieValue('userAuth');

    try {
      const headers = {
        Authorization: `Bearer ${nilaiCookie.data}`,
        'Content-Type': 'application/json',
      };
      const response = await fetch(
        'https://api.moneytalks.my.id/api/v1/keuangan/pencatatan/16',
        {
          method: 'GET',
          headers: headers,
        }
      );

      console.log('response', response);
      return response;

      //   set({
      //     reducerSavings: {
      //       isLoading: false,
      //       data: data || [],
      //       error: null,
      //     },
      //   });

      //   return data;
    } catch (error) {
      set({
        reducerSavings: {
          isLoading: false,
          data: [],
          error: error,
        },
      });
    }
  },
}));

export default useStoreSavings;
