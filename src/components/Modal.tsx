// app/components/Modal.tsx
'use client';

import { useState, useEffect } from 'react';
import { Cliente } from '@/types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  cliente?: Cliente | null;
  onConfirm: (data: Cliente) => void;
}

export default function Modal({ isOpen, onClose, title, cliente, onConfirm }: ModalProps) {
  const [darkMode, setDarkMode] = useState(false);

  // Detectar tema del sistema
  useEffect(() => {
    const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const [formData, setFormData] = useState<Cliente>({
    id: cliente?.id,
    nombre: cliente?.nombre || '',
    apellido: cliente?.apellido || '',
    telefono: cliente?.telefono || '',
    correo: cliente?.correo || '',
    direccion: cliente?.direccion || '',
  });

  // Actualizar formData si cambia el cliente
  useEffect(() => {
    if (cliente) {
      setFormData({
        id: cliente.id,
        nombre: cliente.nombre || '',
        apellido: cliente.apellido || '',
        telefono: cliente.telefono || '',
        correo: cliente.correo || '',
        direccion: cliente.direccion || '',
      });
    } else {
      setFormData({
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        direccion: '',
      });
    }
  }, [cliente]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(formData);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: darkMode ? '#1f2937' : '#fff',
          padding: '2rem',
          borderRadius: '0.5rem',
          width: '400px',
          maxHeight: '80vh',
          overflowY: 'auto',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          color: darkMode ? '#f9fafb' : '#111827',
        }}
      >
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: darkMode ? '#f9fafb' : '#111827',
          }}
        >
          {title}
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: darkMode ? '#9ca3af' : '#4b5563',
              }}
            >
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
                backgroundColor: darkMode ? '#111827' : '#fff',
                color: darkMode ? '#f9fafb' : '#111827',
                fontSize: '1rem',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: darkMode ? '#9ca3af' : '#4b5563',
              }}
            >
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
                backgroundColor: darkMode ? '#111827' : '#fff',
                color: darkMode ? '#f9fafb' : '#111827',
                fontSize: '1rem',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: darkMode ? '#9ca3af' : '#4b5563',
              }}
            >
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
                backgroundColor: darkMode ? '#111827' : '#fff',
                color: darkMode ? '#f9fafb' : '#111827',
                fontSize: '1rem',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: darkMode ? '#9ca3af' : '#4b5563',
              }}
            >
              Correo
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
                backgroundColor: darkMode ? '#111827' : '#fff',
                color: darkMode ? '#f9fafb' : '#111827',
                fontSize: '1rem',
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '600',
                color: darkMode ? '#9ca3af' : '#4b5563',
              }}
            >
              Dirección
            </label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '0.25rem',
                border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
                backgroundColor: darkMode ? '#111827' : '#fff',
                color: darkMode ? '#f9fafb' : '#111827',
                fontSize: '1rem',
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: darkMode ? '#6b7280' : '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
              }}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
              }}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}