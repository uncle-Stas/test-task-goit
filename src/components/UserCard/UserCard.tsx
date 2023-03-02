import React from 'react';
import IUser from 'types/user';

import { Avatar, BtnFollow, Card, Text } from './UserCard.styled';
import { formatNumber } from 'utils';

interface IProp {
  user: IUser;
  btnClick: (id: number) => void;
}

export const UserCard: React.FC<IProp> = ({ user, btnClick }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.user} width={64} height={64} />
      <Text>{formatNumber(user.tweets)} tweets</Text>
      <Text>{formatNumber(user.followers)} followers</Text>
      <BtnFollow type="button" onClick={() => btnClick(user.id)} followStatus={user.isFollowing}>
        {user.isFollowing ? 'following' : 'follow'}
      </BtnFollow>
    </Card>
  );
};
