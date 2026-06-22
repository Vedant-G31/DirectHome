import { supabase } from "../lib/supabaseClient";
import { Listing } from '../types/listing';
import ListingsCarouselClient from './listings_carousel_client';
 
async function getListings(): Promise<Listing[]> {
    const { data, error } = await supabase
        .from('listings')
        .select('*')
        .order('contract_date', { ascending: false })
        .limit(10);
 
    if (error) throw new Error(error.message);
    return data ?? [];
}
 
export default async function Listings_Carousel() {
    const listings = await getListings();
 
    return (
        <div className="flex flex-col gap-4 w-full p-4 items-center font-sans">
            <h1 className="text-3xl font-extrabold leading-tight">Hamilton Listings</h1>
            <ListingsCarouselClient listings={listings} />
        </div>
    );
}