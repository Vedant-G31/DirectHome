import Image from "next/image";
import Listings_Carousel from "./components/listings_carousels";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans">
      <div className="flex flex-col w-full min-h-80 max-h-90 justify-center bg-hero text-white shadow-xl">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-5xl font-extrabold leading-tight">DirectHome</h1>
            <p className="text-2l">An expanded outlook on your future home</p> 
            <div className="flex gap-1">
              <input type="search" className="rounded-[10px] w-100 p-2 border border-solid border-black-200 bg-white text-black" placeholder="Find your next home"></input>
              <button className="rounded-m bg-transparent text-white">
                  <Image
                    src="/search_icon.png"
                    width={40}
                    height={40}
                    alt="Search Icon"
                  ></Image>
              </button>
            </div>
          </div>
      </div>
      <Listings_Carousel></Listings_Carousel>
    </div>
    
  );
}