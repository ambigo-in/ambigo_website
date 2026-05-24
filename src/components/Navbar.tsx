import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          {/* Custom SVG logo based on the image (4 blue/orange dots) */}
          <div className="w-8 h-8 relative">
            <div className="absolute top-0 left-2 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-2 left-0 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute top-4 left-2 w-3 h-3 bg-orange-400 rounded-full"></div>
            <div className="absolute top-2 left-4 w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
          <span className="font-poppins font-extrabold text-xl tracking-tight text-slate-900">Ambigo</span>
        </Link>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-10 font-inter text-sm font-semibold">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-slate-900 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-slate-900" : "text-slate-600 hover:text-slate-900 transition-colors"}>Home</NavLink>
          <NavLink to="/AboutUs" className={({ isActive }) => isActive ? "text-slate-900 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-slate-900" : "text-slate-600 hover:text-slate-900 transition-colors"}>How It Works</NavLink>
          <NavLink to="/individual" className={({ isActive }) => isActive ? "text-slate-900 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-slate-900" : "text-slate-600 hover:text-slate-900 transition-colors"}>Features</NavLink>
          <NavLink to="/contactus" className={({ isActive }) => isActive ? "text-slate-900 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-slate-900" : "text-slate-600 hover:text-slate-900 transition-colors"}>Contact</NavLink>
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <a href="tel:+918985138102" className="inline-flex border-2 border-orange-400 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-2.5 rounded-full font-inter font-bold transition-all shadow-sm">
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
