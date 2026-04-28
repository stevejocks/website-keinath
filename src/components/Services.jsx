const services = [
  {
    icon: 'fa-wifi',
    title: 'Kostenloses WLAN',
    desc: 'Highspeed-Internet in allen Zimmern und im gesamten Haus.',
  },
  {
    icon: 'fa-square-parking',
    title: 'Parkplätze',
    desc: 'Kostenfreie Parkplätze in der Nähe oder direkt am Hotel für 8 € pro Tag.',
  },
  {
    icon: 'fa-martini-glass',
    title: 'Hausbar',
    desc: 'Entspannen Sie an unserer eigenen Bar mit Bier, Softdrinks und Snacks.',
  },
  {
    icon: 'fa-sun',
    title: 'Terrasse',
    desc: 'Genießen Sie frische Luft auf unserer gemütlichen Außenterrasse.',
  },
  {
    icon: 'fa-snowflake',
    title: 'Gästekühlschrank',
    desc: 'Kühlschrank für Gäste montags bis freitags von 6:30 bis 22:00 Uhr.',
  },
  {
    icon: 'fa-calendar-days',
    title: 'Langzeitaufenthalt',
    desc: 'Spezielle Monatspauschalen für Monteure und Wohnen auf Zeit.',
  },
  {
    icon: 'fa-tv',
    title: 'Flachbild-TV',
    desc: 'Digitaler SAT-Empfang auf modernen Flachbildschirmen – kostenlos.',
  },
  {
    icon: 'fa-train-subway',
    title: 'ÖPNV-Anbindung',
    desc: 'U-Bahn-Haltestelle fußläufig erreichbar – Stuttgart bequem ohne Auto erkunden.',
  },
]

const targets = [
  { icon: 'fa-helmet-safety', label: 'Monteure', desc: 'Spezielle Monteurzimmer zu günstigen Konditionen' },
  { icon: 'fa-briefcase', label: 'Geschäftsreisende', desc: 'Ideal für kurze und längere Dienstreisen' },
  { icon: 'fa-people-group', label: 'Gruppen', desc: 'Mehrbettzimmer und Gruppenunterkünfte' },
  { icon: 'fa-house-user', label: 'Langzeitgäste', desc: 'Monatspauschalen und Wohnen auf Zeit' },
]

export default function Services() {
  return (
    <section id="service" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">
            Ausstattung
          </span>
          <h2 className="text-[#1E3A8A] text-3xl md:text-4xl mb-4">Unser Service</h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Alles was Sie für einen angenehmen Aufenthalt brauchen – zu fairen Preisen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-[#1E3A8A]/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] group-hover:bg-[#1E3A8A] flex items-center justify-center mb-4 transition-colors duration-300">
                <i className={`fa-solid ${s.icon} text-[#1E3A8A] group-hover:text-white text-lg transition-colors duration-300`}></i>
              </div>
              <h3 className="text-[#1E3A8A] font-bold text-base mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Target Groups */}
        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#172554] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-white text-2xl md:text-3xl mb-3">Für wen sind wir ideal?</h2>
            <p className="text-white/60 text-sm max-w-lg mx-auto">
              Das Hotel Keinath bietet maßgeschneiderte Angebote für verschiedene Gästegruppen.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {targets.map((t) => (
              <div key={t.label} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-3">
                  <i className={`fa-solid ${t.icon} text-[#F59E0B] text-2xl`}></i>
                </div>
                <div className="text-white font-bold text-base mb-1">{t.label}</div>
                <div className="text-white/55 text-xs leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
