import React from 'react';

import IUser from 'types/user';
import { Avatar, BtnFollow, Card, Text } from './UserCard.styled';

// interface IUser {
//   id: number;
//   user: string;
//   tweets: number;
//   followers: number;
//   avatar: string;
// }

interface IProp {
  user: IUser;
}

export const UserCard: React.FC<IProp> = ({ user }) => {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.user} />
      <Text>{user.tweets} tweets</Text>
      <Text>{user.followers} followers</Text>
      <BtnFollow type="button">Follow</BtnFollow>
    </Card>
  );
};
