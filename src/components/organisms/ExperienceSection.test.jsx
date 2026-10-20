import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { ExperienceSection } from './ExperienceSection';

const testProjects = [
  {
    id: 1,
    title: 'Proyecto de prueba',
    description: 'Descripción del proyecto de prueba.',
    image: '/projects/proyecto-prueba.webp',
    githubUrl: 'https://github.com/ejemplo/proyecto-prueba',
  },
];

afterEach(() => {
  cleanup();
});

describe('Componente ExperienceSection', () => {
  it('debe mostrar el título de experiencia laboral', () => {
    render(<ExperienceSection projects={testProjects} />);

    expect(
      screen.getByText('Experiencia Laboral')
    ).toBeInTheDocument();
  });

  it('debe mostrar el mensaje de primera oportunidad laboral', () => {
    render(<ExperienceSection projects={testProjects} />);

    expect(
      screen.getByText(
        'En búsqueda de mi primera oportunidad laboral'
      )
    ).toBeInTheDocument();
  });

  it('debe mostrar el título de la sección de proyectos', () => {
    render(<ExperienceSection projects={testProjects} />);

    expect(screen.getByText('Proyectos')).toBeInTheDocument();
  });

  it('debe mostrar el título y la descripción del proyecto recibido', () => {
    render(<ExperienceSection projects={testProjects} />);

    expect(
      screen.getByText('Proyecto de prueba')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Descripción del proyecto de prueba.')
    ).toBeInTheDocument();
  });

  it('debe mostrar la imagen con su descripción y ruta', () => {
    render(<ExperienceSection projects={testProjects} />);

    const image = screen.getByRole('img', {
      name: 'Vista previa de Proyecto de prueba',
    });

    expect(image).toHaveAttribute(
      'src',
      '/projects/proyecto-prueba.webp'
    );
  });

  it('debe mostrar el enlace correcto al repositorio', () => {
    render(<ExperienceSection projects={testProjects} />);

    const link = screen.getByRole('link', {
      name: /ver código en github/i,
    });

    expect(link).toHaveAttribute(
      'href',
      'https://github.com/ejemplo/proyecto-prueba'
    );

    expect(link).toHaveAttribute('target', '_blank');
  });

  it('no debe mostrar enlaces de proyectos cuando la lista está vacía', () => {
    render(<ExperienceSection projects={[]} />);

    expect(screen.getByText('Proyectos')).toBeInTheDocument();

    expect(
      screen.queryByRole('link', {
        name: /ver código en github/i,
      })
    ).not.toBeInTheDocument();
  });
});