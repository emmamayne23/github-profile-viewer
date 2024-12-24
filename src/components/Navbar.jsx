import { NavLink } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="bg-cyan-700 text-white py-4 md:py-6 lg:py-8 px-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://vite.dev" target="_blank" className="mr-4">
            <img src={viteLogo} className="h-6 w-6" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="mr-4">
            <img src={reactLogo} className="h-6 w-6" alt="React logo" />
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <NavLink
            to="/"
            className="text-lg font-medium hover:text-gray-300 transition duration-200"
          >
            Home
          </NavLink>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-lg font-medium hover:text-gray-300 transition duration-200">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;