export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Hotel Keinath Stuttgart"
          className="w-full h-full object-cover"
          loading="eager"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#172554]/70 via-[#1E3A8A]/50 to-[#172554]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F59E0B]/20 border border-[#F59E0B]/40 text-[#FCD34D] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
          <i className="fa-solid fa-star text-[#F59E0B]"></i>
          <span>Familiäres 2-Sterne Hotel · Stuttgart-Zuffenhausen</span>
        </div>

        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
          Willkommen im<br />
          <span className="text-[#F59E0B]">Hotel Keinath</span>
        </h1>

        <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Ihr gemütliches Zuhause auf Zeit in Stuttgart – ruhige Lage,
          günstige Preise und herzlicher Service direkt an der Porsche-Fabrik.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#zimmer"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl"
          >
            <i className="fa-solid fa-bed mr-2"></i>
            Zimmer ansehen
          </a>
          <a
            href="tel:+4971187539"
            className="border-2 border-white/50 hover:border-[#F59E0B] text-white hover:text-[#F59E0B] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 cursor-pointer"
          >
            <i className="fa-solid fa-phone mr-2"></i>
            0711 – 87 53 92
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { icon: 'fa-map-pin', value: '6 km', label: 'Stadtzentrum' },
            { icon: 'fa-car', value: '1 km', label: 'Porsche Fabrik' },
            { icon: 'fa-wifi', value: 'Gratis', label: 'WLAN & Parken' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <i className={`fa-solid ${stat.icon} text-[#F59E0B] text-xl mb-2`}></i>
              <div className="text-white font-bold text-lg">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#zimmer"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-[#F59E0B] transition-colors duration-200 animate-bounce cursor-pointer"
      >
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </a>
    </section>
  )
}
