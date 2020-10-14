import React from 'react';
import { Title, Resource } from 'react-admin';
import { useAuth } from '../utils';

export default function Settings() {
  const auth = useAuth();

  return (
    <div>
      <Title title="Configuraciones" />
      {'Módulo de configuraciones'}
    </div>
  );
};

