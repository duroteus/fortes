import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "../components/NavBar";
import { UserProvider } from "./contexts/UserContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sistema de Usuários",
  description: "Sistema de gerenciamento de usuários",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50`}
      >
        <UserProvider>
          <Navbar />
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
