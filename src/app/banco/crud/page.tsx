'use client';

import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import { Cliente } from '@/types';

export default function CrudPage() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCliente, setSelectedCliente] = useState<Cliente | null>(null);

  // 🔄 Cargar clientes
  const fetchClientes = async () => {
    try {
      const res = await fetch('http://44.196.122.187:3000/api/clientes');
      if (!res.ok) throw new Error('Error al cargar');
      const data = await res.json();
      setClientes(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🌓 Detectar modo oscuro
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 📥 Cargar datos al montar
  useEffect(() => {
    fetchClientes();
  }, []);

  // ✅ Guardar (agregar o editar) → decide por data.id
// ✅ Parámetro tipado correctamente
const handleAddOrUpdate = async (data: Cliente) => {
  if (data.id !== undefined) {
    // Editar
    await fetch(`http://44.196.122.187:3000/api/clientes/${data.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  } else {
    // Agregar
    await fetch('http://44.196.122.187:3000/api/clientes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  await fetchClientes();
  closeModal();
};

  // ✏️ Editar
  const handleEdit = (cliente: Cliente) => {
    setSelectedCliente(cliente);
    setShowModal(true);
  };

  // 🗑️ Eliminar
  const handleDelete = async (id: number) => {
    if (!confirm('¿Eliminar cliente?')) return;
    try {
      const res = await fetch(`http://44.196.122.187:3000/api/clientes/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        setClientes(clientes.filter((c) => c.id !== id));
        alert('Cliente eliminado');
      } else {
        alert('Error al eliminar');
      }
    } catch (err) {
      console.error(err);
      alert('Error de red');
    }
  };

  // ➕ Agregar
  const handleAdd = () => {
    setSelectedCliente(null);
    setShowModal(true);
  };

  // ❌ Cerrar modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedCliente(null);
  };

  return (
    <div
      style={{
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: darkMode ? '#111827' : '#f9fafb',
        color: darkMode ? '#f9fafb' : '#111827',
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold' }}>
          🎬 Videoclub - Gestión de Clientes
        </h1>
        <button
          onClick={handleAdd}
          style={{
            padding: '8px 16px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.875rem',
          }}
        >
          + Agregar Cliente
        </button>
      </div>

      {loading ? (
        <p style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>Cargando...</p>
      ) : (
        <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
          <table
            style={{
              minWidth: '900px',
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr
                style={{
                  backgroundColor: darkMode ? '#1f2937' : '#f3f4f6',
                }}
              >
                <th style={thStyle(darkMode)}>ID</th>
                <th style={thStyle(darkMode)}>Nombre</th>
                <th style={thStyle(darkMode)}>Apellido</th>
                <th style={thStyle(darkMode)}>Teléfono</th>
                <th style={thStyle(darkMode)}>Correo</th>
                <th style={thStyle(darkMode)}>Dirección</th>
                <th style={thStyle(darkMode)}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr
                  key={cliente.id}
                  style={{
                    borderBottom: `1px solid ${darkMode ? '#374151' : '#e5e7eb'}`,
                    backgroundColor: darkMode ? '#1f2937' : '#fff',
                    color: darkMode ? '#f9fafb' : '#111827',
                  }}
                >
                  <td style={tdStyle(darkMode)}>{cliente.id}</td>
                  <td style={tdStyle(darkMode)}>{cliente.nombre}</td>
                  <td style={tdStyle(darkMode)}>{cliente.apellido}</td>
                  <td style={tdStyle(darkMode)}>{cliente.telefono}</td>
                  <td
                    style={{
                      ...tdStyle(darkMode),
                      color: darkMode ? '#60a5fa' : '#2563eb',
                    }}
                  >
                    {cliente.correo}
                  </td>
                  <td style={tdStyle(darkMode)}>{cliente.direccion}</td>
                  <td style={tdStyle(darkMode)}>
                    <button
    onClick={() => handleEdit(cliente)}
    style={{
      marginRight: '8px',
      padding: '6px 12px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    Editar
  </button>
  <button
    onClick={() => cliente.id !== undefined && handleDelete(cliente.id)}
    style={{
      padding: '6px 12px',
      backgroundColor: '#ef4444',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    Eliminar
  </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          title={selectedCliente ? 'Editar Cliente' : 'Agregar Cliente'}
          cliente={selectedCliente}
          onConfirm={handleAddOrUpdate}
        />
      )}
    </div>
  );
}

const thStyle = (darkMode: boolean) => ({
  padding: '0.75rem 1rem',
  textAlign: 'left' as const,
  fontSize: '0.75rem',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  color: darkMode ? '#9ca3af' : '#4b5563',
});

const tdStyle = (darkMode: boolean) => ({
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  color: darkMode ? '#f9fafb' : '#111827',
});