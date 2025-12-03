'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Resources() {
  return (
    <section data-page="5" className="relative min-h-screen border-t-2 border-[#444B63]/70 flex flex-col touch-manipulation" style={{ backgroundColor: '#B8C6DB' }}>
      <div className="flex-1 px-4 sm:px-6 md:px-8 py-16 sm:py-18 md:py-20">
        <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-600 flex-shrink-0 mt-1" />
                <a
                  href="mailto:sales@recycleon.in"
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 hover:text-gray-600 transition-colors break-all leading-tight"
                >
                  sales@recycleon.in
                </a>
              </div>
            </div>

            <div className="pt-6 sm:pt-8">
              <h3 className="text-base md:text-lg text-gray-600 mb-4 sm:mb-5 font-medium">
                Follow us
              </h3>
              <a
                href="https://www.linkedin.com/company/recycleon-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
              >
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 min-w-[56px] min-h-[56px] hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/linkedin-logo-png-2024.png"
                    alt="LinkedIn"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5 text-gray-700">
            <h3 className="text-lg md:text-xl leading-relaxed text-gray-800 font-semibold">
              Our Address
            </h3>
            <div className="text-base sm:text-lg md:text-xl leading-relaxed space-y-1.5">
              <p>Level 4- MyScape Weave, Survey no.322(p),</p>
              <p>Puppalaguda Village,</p>
              <p>Behind Continental Hospital,</p>
              <p>Financial District, Hyderabad,</p>
              <p>Telangana 500032</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full py-10 sm:py-12 md:py-14 lg:py-18 overflow-hidden">
        <div className="w-full flex items-center justify-center px-4">
          <div className="relative w-[90%] max-w-[32rem] h-32 sm:max-w-[40rem] sm:h-40 md:max-w-[48rem] md:h-48 lg:max-w-[64rem] lg:h-56 xl:max-w-[80rem] xl:h-64">
            <Image
              src="/images/Untitled_Artwork 24.png"
              alt="Recycleon Technologies"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
