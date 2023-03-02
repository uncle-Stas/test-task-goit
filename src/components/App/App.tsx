import React from 'react';
import users from 'db/users.json';

import { UsersList } from 'components';
import { Container, Section } from './App.styled';

export const App: React.FC = () => {
  return (
    <main>
      <Section>
        <Container>
          <UsersList users={users} />
        </Container>
      </Section>
    </main>
  );
};
