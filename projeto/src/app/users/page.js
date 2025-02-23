"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUsers } from "../contexts/UserContext";

export default function UsersPage() {
  const { users, addUser, updateUser, deleteUser, logout, isAuthenticated } =
    useUsers();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(editingUser.id, login, password);
    } else {
      addUser(login, password);
    }
    resetForm();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setLogin(user.login);
    setPassword(user.password);
    setIsModalOpen(true);
  };

  const resetForm = () => {
    setEditingUser(null);
    setLogin("");
    setPassword("");
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Usuários</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Novo Usuário
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sair
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="px-6 py-3 text-left">Login</th>
              <th className="px-6 py-3 text-left">Data de Cadastro</th>
              <th className="px-6 py-3 text-left">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-6 py-4">{user.login}</td>
                <td className="px-6 py-4">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(user)}
                    className="text-blue-500 hover:text-blue-700 mr-4"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {editingUser ? "Editar Usuário" : "Novo Usuário"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Login</label>
                <input
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2">Senha</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
