import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#zimmer', label: 'Zimmer & Preise' },
  { href: '#service', label: 'Service' },
  { href: '#lage', label: 'Lage' },
  { href: '#kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1E3A8A] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center">
            <i className="fa-solid fa-hotel text-white text-base"></i>
          </div>
          <div className="text-left">
            <div className="font-heading text-white text-sm leading-tight font-bold tracking-wide">
              Hotel Garni
            </div>
            <div className="font-heading text-[#F59E0B] text-xs tracking-widest uppercase">
              Keinath
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-[#F59E0B] text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+4971187539"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
          >
            <i className="fa-solid fa-phone mr-2"></i>
            Jetzt buchen
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-xl p-2 cursor-pointer"
          aria-label="Menü öffnen"
        >
          <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1E3A8A] border-t border-white/10 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-[#F59E0B] py-3 text-sm font-medium border-b border-white/10 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+4971187539"
            className="mt-4 block text-center bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-3 rounded-full transition-colors duration-200 cursor-pointer"
          >
            <i className="fa-solid fa-phone mr-2"></i>
            Jetzt buchen
          </a>
        </div>
      )}
    </header>
  )
}
