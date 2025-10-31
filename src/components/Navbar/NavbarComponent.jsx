import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 👇 Cada vez que cambia la ruta, cierra el menú y hace scroll al inicio
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-3 relative">
        {/* Botón izquierdo */}
        <div className="flex items-center">
          <button className="bg-gray-200 px-3 py-2 rounded hover:bg-gray-300 transition text-sm font-medium">
            Acción
          </button>
        </div>

        {/* Logo centrado */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Botón menú (solo visible en mobile) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 text-3xl focus:outline-none"
            aria-label="Abrir menú"
          >
            {menuOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
        </div>

        {/* Links en desktop */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-start px-6 py-4 space-y-3 border-t border-gray-100">
          <Link to="/" className="w-full text-left text-gray-700">
            Inicio
          </Link>
          <Link to="/nosotros" className="w-full text-left text-gray-700">
            Nosotros
          </Link>
          <Link to="/servicios" className="w-full text-left text-gray-700">
            Servicios
          </Link>
          <Link to="/contacto" className="w-full text-left text-gray-700">
            Contacto
          </Link>
        </div>
      )}
    </header>
  );
}


export default NavbarComponent