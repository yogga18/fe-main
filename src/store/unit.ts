import create from 'zustand';

interface UnitUT {
  kode_unit_baru: string;
  kode_unit: string;
  nama_unit: string;
  kode_unit_lama: string;
  nama_unit_lama: string;
  kepusatan: string;
}

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface UnitUTState {
  isLoading: boolean;
  data: UnitUT[];
  error: Error | null;
}

interface UsersState {
  isLoading: boolean;
  data: Users[];
  error: Error | null;
}

interface UnitUTStore {
  UnitUT: UnitUTState;
  UsersUT: UsersState;
  getUnitUT: () => Promise<any>;
  getUsersUT: () => Promise<any>;
}

const useUnitUTStore = create<UnitUTStore>((set) => ({
  UnitUT: {
    isLoading: false,
    data: [],
    error: null,
  },
  UsersUT: {
    isLoading: false,
    data: [],
    error: null,
  },

  getUnitUT: async () => {
    set({ UnitUT: { isLoading: true, data: [], error: null } });

    const response = await fetch('https://asset.ut.ac.id/hrd/unit');
    const data: UnitUT[] = await response.json();

    try {
      set({ UnitUT: { isLoading: false, data: data, error: null } });
      return data;
    } catch (error) {
      set({ UnitUT: { isLoading: false, data: [], error: null } });
      return data;
    }
  },
  getUsersUT: async () => {
    set({ UsersUT: { isLoading: true, data: [], error: null } });

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data: Users[] = await response.json();

      set({ UsersUT: { isLoading: false, data, error: null } });
      return data;
    } catch (error) {
      set({ UsersUT: { isLoading: false, data: [], error: null } });
      return [];
    }
  },
}));

export default useUnitUTStore;
