"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/users") return null;

  return (
    <nav className="bg-white border-b border-[var(--color-border)] shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-fortes-tecnologia-1-1.gif"
              alt="Fortes Tecnologia"
              width={150}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          <Link
            href="/login"
            className="bg-[var(--color-accent)] text-[var(--color-text-white)] px-6 py-2 rounded-md 
                     hover:bg-[var(--color-accent-light)] transition-colors duration-200 text-sm font-medium"
          >
            Acessar Sistema
          </Link>
        </div>
      </div>
    </nav>
  );
}
