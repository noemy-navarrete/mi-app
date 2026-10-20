import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactFormSection } from './ContactFormSection';

describe('ContactFormSection Component', () => {
  it('renderiza correctamente el título y los campos del formulario', () => {
    render(<ContactFormSection />);
    expect(screen.getByText('Formulario de Contacto')).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
  });

  it('muestra mensajes de error si se intenta enviar el formulario vacío', async () => {
    render(<ContactFormSection />);
    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Por favor ingresa tu nombre completo')).toBeInTheDocument();
      expect(screen.getByText('Por favor ingresa tu correo electrónico')).toBeInTheDocument();
      expect(screen.getByText('Por favor escribe un mensaje')).toBeInTheDocument();
    });
  });

  it('valida el formato de un correo electrónico inválido', async () => {
    render(<ContactFormSection />);
    const emailInput = screen.getByLabelText(/correo electrónico/i);
    
    fireEvent.change(emailInput, { target: { value: 'correo-invalido' } });
    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    await waitFor(() => {
      expect(screen.getByText('Ingresa un correo electrónico válido')).toBeInTheDocument();
    });
  });
});