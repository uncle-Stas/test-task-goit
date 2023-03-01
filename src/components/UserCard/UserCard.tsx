import React, { useState, useEffect } from 'react';
import { Avatar, BtnFollow, Card, Text } from './UserCard.styled';
import { formatNumber, getDataLocalStorage } from 'utils';
import IUser from 'types/user';

interface IProp {
  user: IUser;
}

export const UserCard: React.FC<IProp> = ({ user }) => {
  const userLocalState = getDataLocalStorage('user');
  const [userState, setUserState] = useState<IUser>(userLocalState ?? user);
  console.log('userState: ', userState.followers);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userState));
  }, [userState]);

  const btnIvent = (): void => {
    if (!userState.isFollowing) {
      setUserState(prevState => ({
        ...prevState,
        followers: prevState.followers + 1,
        isFollowing: true,
      }));
      return;
    }

    setUserState(prevState => ({
      ...prevState,
      followers: prevState.followers - 1,
      isFollowing: false,
    }));
  };

  return (
    <Card>
      <Avatar src={userState.avatar} alt={userState.user} />
      <Text>{formatNumber(userState.tweets)} tweets</Text>
      <Text>{formatNumber(userState.followers)} followers</Text>
      <BtnFollow type="button" onClick={btnIvent} followStatus={userState.isFollowing}>
        {userState.isFollowing ? 'following' : 'follow'}
      </BtnFollow>
    </Card>
  );
};
