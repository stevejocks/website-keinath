export default function Footer() {
  return (
    <footer className="bg-[#172554] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center">
                <i className="fa-solid fa-hotel text-white text-base"></i>
              </div>
              <div>
                <div className="font-heading text-white text-sm font-bold">Hotel Garni Keinath</div>
                <div className="text-[#F59E0B] text-xs tracking-widest uppercase">Stuttgart-Zuffenhausen</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">
              Ihr familiäres 2-Sterne Hotel in ruhiger Lage – ideal für Monteure,
              Geschäftsreisende und Langzeitgäste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              {[
                { href: '#zimmer', label: 'Zimmer & Preise' },
                { href: '#service', label: 'Service & Ausstattung' },
                { href: '#lage', label: 'Lage & Anfahrt' },
                { href: '#kontakt', label: 'Kontakt & Buchung' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-[#F59E0B] text-sm transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/55">
                <i className="fa-solid fa-location-dot text-[#F59E0B] mt-0.5 w-4 shrink-0"></i>
                Spielberger Str. 24-26<br />70435 Stuttgart-Zuffenhausen
              </li>
              <li>
                <a href="tel:+4971187539" className="flex items-center gap-2.5 text-sm text-white/55 hover:text-[#F59E0B] transition-colors duration-200 cursor-pointer">
                  <i className="fa-solid fa-phone text-[#F59E0B] w-4 shrink-0"></i>
                  +49 (0)711 – 87 53 92
                </a>
              </li>
              <li>
                <a href="mailto:info@hotel-keinath.de" className="flex items-center gap-2.5 text-sm text-white/55 hover:text-[#F59E0B] transition-colors duration-200 cursor-pointer">
                  <i className="fa-solid fa-envelope text-[#F59E0B] w-4 shrink-0"></i>
                  info@hotel-keinath.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/35">
          <span>© {new Date().getFullYear()} Hotel Garni Keinath. Alle Rechte vorbehalten.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors duration-200 cursor-pointer">Impressum</a>
            <a href="#" className="hover:text-white/60 transition-colors duration-200 cursor-pointer">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
