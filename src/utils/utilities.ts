import CryptoJS from 'crypto-js';

export const SECRET_KEY: string = 'SECRET_KEY';

interface EncryptedStorage {
  encLocalStrg: (data: any) => string;
  decLocalStrg: (data: string | null) => any | null;
}

const encryptedStorage: EncryptedStorage = {
  encLocalStrg(data: any): string {
    const encryptedUser = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY
    ).toString();

    return encryptedUser;
  },

  decLocalStrg(data: string | null): any | null {
    try {
      if (!data) return null;

      const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
      const user = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      return user;
    } catch (error) {
      console.error('Error decrypting data:', error);
      return null;
    }
  },
};

export default encryptedStorage;
