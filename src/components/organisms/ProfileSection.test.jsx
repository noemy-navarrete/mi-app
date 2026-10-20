import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProfileSection } from './ProfileSection';

describe('Componente ProfileSection', () => {
  it('debe renderizar la información del perfil correctamente', () => {
    render(<ProfileSection />);
    const nameElement = screen.getByText('Noemy Navarrete');
    expect(nameElement).toBeInTheDocument();
  });
});