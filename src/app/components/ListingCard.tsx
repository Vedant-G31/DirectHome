// components/ListingCard.tsx
import { Listing } from '../types/listing';
import Image from 'next/image';

export default function ListingCard({ listing }: { listing: Listing }) {
  const formatPrice = (price: number | null) =>
    price ? `$${price.toLocaleString('en-CA')}` : 'N/A';

  return (
    <div className="relative w-150 h-60 rounded-2xl shadow hover:shadow-md transition">
    <div className="flex w-full h-full rounded-2xl overflow-hidden bg-white">
      {/* Text panel - left side */}
      <div className="flex flex-col h-full w-[55%] p-4">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            {listing.status}
          </span>
        </div>

        <h2 className="text-base font-semibold text-gray-900 mb-1">
          {listing.address}
        </h2>
        <p className="text-sm text-gray-500 pb-1">
          {listing.community}, {listing.municipality}
        </p>

        <div className="flex flex-col text-sm mb-1">
          <div className="font-medium">{listing.type ?? '—'}</div>
          <div className="flex flex-row align-center text-sm text-center gap-2">
            <div className="font-medium flex justify-center gap-1">
              {listing.baths ?? '—'}
              <div className="text-gray-400">Baths</div>
            </div>
            <div className="font-medium flex justify-center gap-1">
              {listing.bedrooms ?? '—'}
              <div className="text-gray-400">Bedrooms</div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="text-lg font-bold text-green-700">
            {listing.list_price}
          </div>
          {listing.sold_price && (
            <div className="text-sm text-gray-500">
              Sold: {listing.sold_price}
            </div>
          )}
        </div>
      </div>

      {/* Image panel - right side. relative + h-full gives the Image's `fill`
          a bounded box; overflow-hidden on the parent clips it to match
          the card's outer rounded corners automatically. */}
      <div className="relative w-[45%] h-full">
        <Image
          src="/pexels-binyaminmellish-186077.jpg"
          alt={'house'}
          fill
          className="object-cover object-center"
          sizes="400px"
        />
      </div>
    </div>
    </div>
  );
}