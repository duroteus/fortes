"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { useUsers } from "../contexts/UserContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { validateLogin } = useUsers();

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateLogin(username, password)) {
      router.push("/users");
    } else {
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <div className="min-h-[calc(100vh-72px)] flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <Link href="/">
            <Button variant="secondary" className="!w-auto">
              ← Voltar
            </Button>
          </Link>
        </div>

        <Card title="Login">
          <div className="p-2">
            {error && (
              <div className="mb-6 bg-red-50 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-6">
              <Input
                label="Usuário"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <Input
                label="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit">Entrar</Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
