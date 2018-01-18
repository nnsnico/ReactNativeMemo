import { AsyncStorage } from 'react-native';
import Memo from '../models/Memo';

class LocalStorage {
  async loadItem(key: string): Promise<Memo> {
    return AsyncStorage.getItem(`@memo:${key}`)
      .then((json) => {
        return JSON.parse(json) as Memo
      });
  }

  async saveItem(item: Memo): Promise<void> {
    return AsyncStorage.setItem(`@memo:${item.key}`, JSON.stringify(item));
  }

  async loadAllItems(): Promise<Memo[]> {
    return AsyncStorage.getAllKeys()
      .then((keys: string[]) => {
        const fetchKeys = keys.filter((k) => { return k.startsWith('@memo:') });
        return AsyncStorage.multiGet(fetchKeys);
      })
      .then((result) => {
        return result.map((r) => { return JSON.parse(r[1]) as Memo });
      });
  }
}

const localStorage = new LocalStorage();
export default localStorage;