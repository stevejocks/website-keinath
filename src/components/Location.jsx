const highlights = [
  { icon: 'fa-location-dot', label: 'Adresse', value: 'Spielberger Str. 24-26\n70435 Stuttgart-Zuffenhausen' },
  { icon: 'fa-train-subway', label: 'U-Bahn', value: 'Wenige Gehminuten zur\nnächsten Haltestelle' },
  { icon: 'fa-car', label: 'Porsche Fabrik', value: 'Nur 1 km entfernt\nideal für Porsche-Mitarbeiter' },
  { icon: 'fa-city', label: 'Stadtzentrum', value: '6 km bis ins\nStuttgarter Zentrum' },
]

export default function Location() {
  return (
    <section id="lage" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">
            Anreise
          </span>
          <h2 className="text-[#1E3A8A] text-3xl md:text-4xl mb-4">Lage & Anfahrt</h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Ruhige Ortsrandlage in Stuttgart-Zuffenhausen – ideal gelegen für Arbeit und Erholung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-md h-80 lg:h-full min-h-80">
            <iframe
              title="Hotel Keinath Standort"
              src="https://www.openstreetmap.org/export/embed.html?bbox=9.156&layer=mapnik&marker=48.8193,9.1645"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '320px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Info */}
          <div>
            {/* Image of area */}
            <div className="rounded-2xl overflow-hidden h-52 mb-6 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80"
                alt="Stuttgart Zuffenhausen"
                className="w-full h-full object-cover"
                loading="lazy"
                width="800"
                height="400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div key={h.label} className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0 mt-0.5">
                      <i className={`fa-solid ${h.icon} text-[#1E3A8A] text-sm`}></i>
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium mb-0.5">{h.label}</div>
                      <div className="text-slate-700 text-sm font-medium whitespace-pre-line leading-snug">
                        {h.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=Spielberger+Straße+24,+70435+Stuttgart"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#172554] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 cursor-pointer text-sm"
            >
              <i className="fa-solid fa-diamond-turn-right"></i>
              Route in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
