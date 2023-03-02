import React, { useEffect, useState } from 'react';
import IUser from 'types/user';

import { UserCard } from 'components';
import { getDataLocalStorage } from 'utils';
import { List } from './UsersList.styled';

interface IProp {
  users: IUser[];
}

export const UsersList: React.FC<IProp> = ({ users }) => {
  const checkLocalStorage = getDataLocalStorage('users');
  const [usersLocalState, setUserLocalState] = useState<IUser[]>(checkLocalStorage ?? users);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersLocalState));
  }, [usersLocalState]);

  const btnAction = (id: number): void => {
    const userQ: IUser | undefined = usersLocalState.find((user: IUser) => user.id === id);

    if (!userQ?.isFollowing) {
      setUserLocalState((prevState: IUser[]) =>
        prevState.map(item =>
          item.id === id
            ? {
                ...item,
                isFollowing: true,
                followers: item.followers + 1,
              }
            : item
        )
      );
      return;
    }

    setUserLocalState((prevState: IUser[]) =>
      prevState.map(item =>
        item.id === id
          ? {
              ...item,
              isFollowing: false,
              followers: item.followers - 1,
            }
          : item
      )
    );
  };

  return (
    <List>
      {usersLocalState.map(
        (user): React.ReactNode => (
          <UserCard key={user.id} user={user} btnClick={btnAction} />
        )
      )}
    </List>
  );
};
