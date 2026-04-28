const photos = [
  {
    src: 'https://images.unsplash.com/photo-1576675784201-0e142b423952?w=800&q=80',
    alt: 'Hotelzimmer',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    alt: 'Frühstücksraum',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    alt: 'Frühstücksbuffet',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=600&q=80',
    alt: 'Hotelbar',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80',
    alt: 'Hoteleingang',
    span: '',
  },
]

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[#F59E0B] text-sm font-semibold tracking-widest uppercase mb-3">
            Einblicke
          </span>
          <h2 className="text-[#1E3A8A] text-3xl md:text-4xl mb-4">Galerie</h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Überzeugen Sie sich selbst von der gemütlichen Atmosphäre im Hotel Keinath.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[500px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl ${photo.span} ${i === 0 ? 'col-span-2 md:col-span-2' : ''}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 min-h-40"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
