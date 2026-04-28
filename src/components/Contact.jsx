export default function Contact() {
  return (
    <section id="kontakt" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">
            Buchung & Anfrage
          </span>
          <h2 className="text-[#1E3A8A] text-3xl md:text-4xl mb-4">Kontakt</h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Rufen Sie uns einfach an oder schreiben Sie uns eine E-Mail. Wir antworten schnell!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="space-y-5 mb-10">
              {[
                {
                  icon: 'fa-phone',
                  label: 'Telefon',
                  value: '+49 (0)711 – 87 53 92',
                  href: 'tel:+4971187539',
                  cta: 'Direkt anrufen',
                },
                {
                  icon: 'fa-fax',
                  label: 'Fax',
                  value: '+49 (0)711 – 87 90 373',
                  href: null,
                  cta: null,
                },
                {
                  icon: 'fa-envelope',
                  label: 'E-Mail',
                  value: 'info@hotel-keinath.de',
                  href: 'mailto:info@hotel-keinath.de',
                  cta: 'E-Mail senden',
                },
                {
                  icon: 'fa-location-dot',
                  label: 'Adresse',
                  value: 'Spielberger Straße 24-26\n70435 Stuttgart-Zuffenhausen',
                  href: null,
                  cta: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <i className={`fa-solid ${item.icon} text-[#1E3A8A]`}></i>
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs font-medium mb-0.5">{item.label}</div>
                    <div className="text-slate-700 font-medium text-sm whitespace-pre-line leading-snug">
                      {item.value}
                    </div>
                    {item.href && (
                      <a
                        href={item.href}
                        className="inline-block mt-1 text-[#1E3A8A] hover:text-[#F59E0B] text-xs font-semibold transition-colors duration-200 cursor-pointer"
                      >
                        {item.cta} →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Large CTA */}
            <div className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-2xl p-6 text-white">
              <h3 className="font-heading text-xl mb-2">Direkt buchen</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Kein Online-Formular – rufen Sie einfach an und wir finden gemeinsam das richtige Zimmer für Sie.
              </p>
              <a
                href="tel:+4971187539"
                className="inline-flex items-center gap-2 bg-white text-[#B45309] font-bold px-6 py-3 rounded-full text-sm hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
              >
                <i className="fa-solid fa-phone"></i>
                0711 – 87 53 92
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-[#1E3A8A] font-bold text-xl mb-6">Anfrage senden</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Vielen Dank für Ihre Anfrage! Wir melden uns bald.')
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-600 text-xs font-semibold mb-1.5" htmlFor="vorname">
                    Vorname *
                  </label>
                  <input
                    id="vorname"
                    type="text"
                    required
                    placeholder="Max"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-xs font-semibold mb-1.5" htmlFor="nachname">
                    Nachname *
                  </label>
                  <input
                    id="nachname"
                    type="text"
                    required
                    placeholder="Mustermann"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-600 text-xs font-semibold mb-1.5" htmlFor="email">
                  E-Mail *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="max@beispiel.de"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all duration-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-600 text-xs font-semibold mb-1.5" htmlFor="anreise">
                    Anreise
                  </label>
                  <input
                    id="anreise"
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 text-xs font-semibold mb-1.5" htmlFor="abreise">
                    Abreise
                  </label>
                  <input
                    id="abreise"
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-600 text-xs font-semibold mb-1.5" htmlFor="nachricht">
                  Nachricht
                </label>
                <textarea
                  id="nachricht"
                  rows={4}
                  placeholder="Ihre Wünsche oder Fragen..."
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1E3A8A] hover:bg-[#172554] text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 cursor-pointer text-sm"
              >
                <i className="fa-solid fa-paper-plane mr-2"></i>
                Anfrage absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
