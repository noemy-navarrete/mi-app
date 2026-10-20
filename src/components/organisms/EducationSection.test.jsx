import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

import { EducationSection } from './EducationSection';
import { mockEducation } from '../../data/portfolioData';

afterEach(() => {
  cleanup();
});

describe('Componente EducationSection', () => {
  it('debe mostrar el título de educación y formación', () => {
    render(<EducationSection />);

    expect(screen.getByText(/educación/i)).toBeInTheDocument();
  });

  it('debe mostrar cada carrera o formación', () => {
    render(<EducationSection />);

    mockEducation.forEach((education) => {
      if (education.degree) {
        expect(
          screen.getByText((content) => content.includes(education.degree))
        ).toBeInTheDocument();
      }
    });
  });

  it('debe mostrar las instituciones', () => {
    render(<EducationSection />);

    mockEducation.forEach((education) => {
      if (education.institution) {
        expect(
          screen.getByText((content) => content.includes(education.institution))
        ).toBeInTheDocument();
      }
    });
  });

  it('debe mostrar los períodos de estudio', () => {
    render(<EducationSection />);

    mockEducation.forEach((education) => {
      if (education.period) {
        expect(
          screen.getByText((content) => content.includes(education.period))
        ).toBeInTheDocument();
      }
    });
  });
});