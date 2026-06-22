'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Listing } from '../types/listing';
import ListingCard from './ListingCard';
import SeeMoreCard from './SeeMoreCard';

interface ListingsCarouselClientProps {
  listings: Listing[];
}

export default function ListingsCarouselClient({ listings }: ListingsCarouselClientProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback((api: NonNullable<typeof emblaApi>) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!listings.length) return null;

  return (
    <div className="relative w-250 h-80">
        <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
                {listings.map((listing) => (
                <div key={listing.id} className="shrink-0 grow-0 basis-full pl-4 flex justify-center">
                    <ListingCard listing={listing} />
                </div>
                ))}
                  <div className="flex justify-center items-center shrink-0 basis-full p-4 ">
                       <SeeMoreCard/>
                  </div>

            </div>
        </div>

      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Previous listings"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10
                   rounded-full bg-white shadow-md p-2 disabled:opacity-30
                   hover:bg-gray-50 transition-opacity"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Next listings"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10
                   rounded-full bg-white shadow-md p-2 disabled:opacity-30
                   hover:bg-gray-50 transition-opacity"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}