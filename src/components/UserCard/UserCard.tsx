import React, { useState } from 'react';
import { Avatar, BtnFollow, Card, Text } from './UserCard.styled';
import { formatNumber } from 'utils';
import IUser from 'types/user';

interface IProp {
  user: IUser;
}

export const UserCard: React.FC<IProp> = ({ user }) => {
  const [isFollowing, setIsFollowing] = useState(!!localStorage.getItem('isFollowing'));

  const btnIvent = (): void => {
    if (!isFollowing) {
      setIsFollowing(true);
      localStorage.setItem('isFollowing', 'true');
      return;
    }
    setIsFollowing(false);
    localStorage.setItem('isFollowing', '');
  };

  return (
    <Card>
      <Avatar src={user.avatar} alt={user.user} />
      <Text>{formatNumber(user.tweets)} tweets</Text>
      <Text>{formatNumber(user.followers)} followers</Text>
      <BtnFollow type="button" onClick={btnIvent} followStatus={isFollowing}>
        {isFollowing ? 'following' : 'follow'}
      </BtnFollow>
    </Card>
  );
};
