'use client';

interface DirectorProfile {
  name: string;
  title: string;
  image: string;
}

function DirectorCard({ name, title, image }: DirectorProfile) {
  return (
    <div className="group touch-manipulation">
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:rounded-3xl mb-5 sm:mb-6 shadow-md">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-2.5 leading-tight">
        {name}
      </h3>
      <p className="text-sm sm:text-base text-gray-500 uppercase tracking-wider">
        {title}
      </p>
    </div>
  );
}

export function Projects() {
  const directors: DirectorProfile[] = [
    {
      name: 'Teja Ramineni',
      title: 'Founder',
      image: '/images/IMG_6538 copy copy.jpg'
    },
    {
      name: 'Venkatesh Muthavarapu',
      title: 'Founder',
      image: '/images/IMG_9623.jpg'
    }
  ];

  return (
    <section data-page="4" className="relative py-16 sm:py-20 md:py-24 lg:py-32 border-t-2 border-[#444B63]/70 bg-white touch-manipulation">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-12 sm:mb-14 md:mb-18">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-2 leading-tight">
            Meet The Makers
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-20 max-w-6xl">
          {directors.map((director) => (
            <DirectorCard
              key={director.name}
              name={director.name}
              title={director.title}
              image={director.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
