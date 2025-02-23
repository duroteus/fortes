export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          Desenvolvido por{" "}
          <a
            href="https://github.com/duroteus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            Gustavo Aragão
          </a>
        </p>
        <p className="text-gray-500 text-sm mt-1">
          © {new Date().getFullYear()} - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
