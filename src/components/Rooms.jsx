const rooms = [
  {
    type: 'Einzelzimmer',
    subtitle: 'mit Etagendusche',
    price: 36,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    features: ['Flachbild-TV', 'Kostenloses WLAN', 'Gemeinschaftsbad', 'Digitaler Empfang'],
    badge: 'Budget',
    badgeColor: 'bg-slate-100 text-slate-600',
  },
  {
    type: 'Einzelzimmer',
    subtitle: 'mit Dusche/WC',
    price: 52,
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
    features: ['Eigenes Bad', 'Flachbild-TV', 'Kostenloses WLAN', 'Digitaler Empfang'],
    badge: 'Beliebt',
    badgeColor: 'bg-[#1E3A8A]/10 text-[#1E3A8A]',
  },
  {
    type: 'Doppelzimmer',
    subtitle: 'mit Dusche/WC',
    price: 60,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80',
    features: ['Eigenes Bad', 'Flachbild-TV', 'Kostenloses WLAN', 'Doppelbett'],
    badge: 'Empfohlen',
    badgeColor: 'bg-[#F59E0B]/15 text-[#B45309]',
  },
  {
    type: 'Zweibettzimmer',
    subtitle: 'mit Etagendusche',
    price: 55,
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=80',
    features: ['2 Einzelbetten', 'Flachbild-TV', 'Kostenloses WLAN', 'Gemeinschaftsbad'],
    badge: 'Gut für Kollegen',
    badgeColor: 'bg-slate-100 text-slate-600',
  },
  {
    type: 'Dreibettzimmer',
    subtitle: 'mit Etagendusche',
    price: 78,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=80',
    features: ['3 Betten', 'Flachbild-TV', 'Kostenloses WLAN', 'Gemeinschaftsbad'],
    badge: 'Für Teams',
    badgeColor: 'bg-green-50 text-green-700',
  },
  {
    type: 'Vierbettzimmer',
    subtitle: 'mit Dusche/WC',
    price: 120,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80',
    features: ['4 Betten', 'Eigenes Bad', 'Kostenloses WLAN', 'Verbindungstür'],
    badge: 'Familien & Gruppen',
    badgeColor: 'bg-purple-50 text-purple-700',
  },
]

export default function Rooms() {
  return (
    <section id="zimmer" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">
            Unterkunft
          </span>
          <h2 className="text-[#1E3A8A] text-3xl md:text-4xl mb-4">Zimmer & Preise</h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Wählen Sie aus unseren komfortablen Zimmern – alle mit kostenlosem WLAN
            und digitalem Fernsehempfang ausgestattet.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.type + room.subtitle}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.type}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${room.badgeColor}`}>
                  {room.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-[#1E3A8A] text-lg font-bold">{room.type}</h3>
                  <p className="text-slate-400 text-sm">{room.subtitle}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <i className="fa-solid fa-check text-[#F59E0B] text-xs w-4"></i>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-slate-400 text-xs">ab</span>
                    <span className="text-[#1E3A8A] text-2xl font-bold ml-1">{room.price} €</span>
                    <span className="text-slate-400 text-xs">/Nacht</span>
                  </div>
                  <a
                    href="tel:+4971187539"
                    className="bg-[#1E3A8A] hover:bg-[#172554] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer"
                  >
                    Anfragen
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Breakfast add-on */}
        <div className="mt-10 bg-[#1E3A8A] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="w-14 h-14 rounded-full bg-[#F59E0B]/20 flex items-center justify-center shrink-0 mx-auto md:mx-0">
            <i className="fa-solid fa-mug-hot text-[#F59E0B] text-2xl"></i>
          </div>
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-1">Reichhaltiges Frühstücksbuffet</h3>
            <p className="text-white/65 text-sm">
              Starten Sie den Tag mit unserem vielfältigen Frühstücksbuffet – täglich ab 6:30 Uhr.
            </p>
          </div>
          <div className="text-center shrink-0">
            <span className="text-[#F59E0B] text-3xl font-bold">10 €</span>
            <span className="text-white/60 text-sm block">pro Person</span>
          </div>
        </div>
      </div>
    </section>
  )
}
