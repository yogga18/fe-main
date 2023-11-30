import CryptoJS from 'crypto-js';

const NODE: string = 'development';
const SECRET_KEY: any = 'w3lllllOVE4le';

interface HashFunctions {
  hash: (key: string) => string;
  encrypt: (data: string) => string;
  decrypt: (data: string) => string;
}

const hash: HashFunctions = {
  hash: function hash(key: string): string {
    const hashedKey = CryptoJS.SHA256(key, SECRET_KEY);
    return typeof hashedKey === 'string' ? hashedKey : hashedKey.toString();
  },

  encrypt(data: string): string {
    const encryptedData = CryptoJS.AES.encrypt(data, SECRET_KEY);
    return encryptedData.toString();
  },

  decrypt(data: string): string {
    const decryptedData = CryptoJS.AES.decrypt(data, SECRET_KEY);
    return CryptoJS.enc.Utf8.stringify(decryptedData);
  },
};

const storageService = {
  setItem(key: string, value: string): void {
    if (NODE === 'development') {
      localStorage.setItem(key, value);
    } else {
      const secKey: string = hash.hash(key);
      const encryptedValue: string = hash.encrypt(value);

      localStorage.setItem(secKey, encryptedValue);
    }
  },

  getItem(key: string): string | null {
    if (NODE === 'development') {
      return key;
    } else {
      const secKey: string = hash.hash(key);
      const data: string | null = localStorage.getItem(secKey);

      if (data) return hash.decrypt(data);

      return null;
    }
  },

  removeItem(key: string): void {
    if (NODE !== 'development') key = hash.hash(key);

    localStorage.removeItem(key);
  },
};

export default storageService;
