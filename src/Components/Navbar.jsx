import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          My Portofolio
        </h1>

        <nav className="space-x-4">
          <Link to="/" className={linkClass("/")}>
            Home
          </Link>

          <Link to="/project" className={linkClass("/project")}>
            Projects
          </Link>

          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
