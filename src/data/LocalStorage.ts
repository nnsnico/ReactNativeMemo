import { AsyncStorage } from 'react-native';
import Memo from '../models/Memo';

class LocalStorage {
    async getItem(key: string): Promise<Memo> {
        return AsyncStorage.getItem(`@memo:${key}`)
            .then((json) => {
                return JSON.parse(json) as Memo
            });
    }

    async setItem(item: Memo): Promise<void> {
        return AsyncStorage.setItem(`@memo:${item.key}`, JSON.stringify(item));
    }
}

export default LocalStorage;