import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">AI App</h1>

        <div className="space-x-6">
          <Link className="hover:text-cyan-400 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/service">
            Service
          </Link>
          <Link className="hover:text-cyan-400 transition" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}