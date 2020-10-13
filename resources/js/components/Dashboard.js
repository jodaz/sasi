import React from 'react';
import { Title } from 'react-admin';
import { useAuth } from '../utils';

export default function Dashboard() {
  const auth = useAuth();

  return (
    <>
      <Title title='Inicio' />
    </>
  );
};

