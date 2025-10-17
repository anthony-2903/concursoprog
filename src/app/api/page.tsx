// app/api/page.tsx
import { Suspense } from 'react';

// Definimos el tipo para evitar 'any'
interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  correo: string;
  direccion: string;
}

// Función para obtener los clientes desde tu backend en la nube
async function getClientes() {
  const res = await fetch('http://54.144.206.75:3000/api/clientes', {
    cache: 'no-store', // Evita caché en desarrollo
  });

  if (!res.ok) {
    throw new Error('Error al cargar los clientes');
  }

  return res.json() as Promise<Cliente[]>;
}

// Componente que muestra la tabla
async function ClientesTable() {
  const clientes = await getClientes();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teléfono</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Correo</th>
            <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {clientes.map((cliente) => (
            <tr key={cliente.id} className="hover:bg-gray-50">
              <td className="py-3 px-4 text-sm text-gray-800">{cliente.id}</td>
              <td className="py-3 px-4 text-sm font-medium text-gray-900">{cliente.nombre}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{cliente.apellido}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{cliente.telefono}</td>
              <td className="py-3 px-4 text-sm text-blue-600">{cliente.correo}</td>
              <td className="py-3 px-4 text-sm text-gray-800">{cliente.direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Página principal
export default function ApiPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">🎬 Videoclub - Vista API</h1>
        <p className="text-gray-600 mb-6">
          Datos consumidos desde: <code className="bg-gray-200 px-2 py-1 rounded">http://54.144.206.75:3000</code>
        </p>

        <Suspense fallback={<p className="text-gray-500">Cargando...</p>}>
          <ClientesTable />
        </Suspense>
      </div>
    </div>
  );
}