import IUser from 'types/user';

export const getDataLocalStorage = (key: string): undefined | IUser => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error: any) {
    console.error('Get state error: ', error.message);
  }
};
