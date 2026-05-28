import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import Logo from "./Logo";
import { navLinks } from "../data/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm overflow-visible">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-2 flex items-center gap-6">
        <Logo height={104} overflow />

        {/* Desktop nav (centered) */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-8 text-[15px] font-semibold text-brand-navy">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 hover:text-brand-red transition-colors ${
                      isActive ? "text-brand-red" : ""
                    }`
                  }
                >
                  {link.label}
                  <FiChevronDown className="text-sm" />
                </NavLink>
                {productsOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64">
                    <div className="bg-white rounded-lg shadow-card border border-slate-100 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-gray hover:text-brand-red transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative hover:text-brand-red transition-colors ${
                    isActive
                      ? "text-brand-red after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:bg-brand-red"
                      : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redDark text-white font-semibold px-5 py-2.5 rounded-md shadow-soft transition-colors"
        >
          GET A QUOTE <FiArrowRight />
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-brand-navy text-2xl"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <nav className="px-4 py-3 flex flex-col">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-slate-100 last:border-b-0">
                {link.children ? (
                  <details className="group">
                    <summary className="flex items-center justify-between py-3 font-semibold text-brand-navy cursor-pointer list-none">
                      <Link to={link.to}>{link.label}</Link>
                      <FiChevronDown className="group-open:rotate-180 transition-transform" />
                    </summary>
                    <div className="pl-3 pb-2">
                      {link.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block py-2 text-sm text-slate-600 hover:text-brand-red"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={link.to}
                    className="block py-3 font-semibold text-brand-navy hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-red text-white font-semibold py-3 rounded-md"
            >
              GET A QUOTE <FiArrowRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
