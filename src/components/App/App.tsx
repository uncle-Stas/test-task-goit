import React from 'react';

import { UserCard } from 'components';

import user from 'db/users.json';

export const App: React.FC = () => {
  return (
    <main>
      <UserCard user={user} />
    </main>
  );
};
