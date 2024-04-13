import React from "react";

const SearchButton = () =>{
    return(
     <div className="hidden md:block">
<div className="container mx-auto">
    <div className="flex w-full bg-white rounded">
      <input
        className="w-full px-4 py-1 text-gray-400 bg-transparent border-none outline-none focus:outline-none"
        type="search"
        name="search"
        placeholder="Search for any skill"
      />
      <button
        type="submit"
        className="px-4 py-2 m-2 bg-transparent border-none"
      >
        <img src="/assets/image/search (1) 1.svg" />
      </button>
      <div className=" h-[20px] min-h-[40px] w-0.5 self-stretch bg-Grey2 text-center my-auto" />
      <button
        type="submit"
        className="m-2  px-4 py-2 bg-transparent border-none font-openSans font-semibold text-[16px] text-Grey2"
      >
        Kategori
      </button>
      <button
        type="submit"
        className=" m-2 mx-5 px-4 py-2 bg-Purple border-none rounded font-openSans font-semibold text-[16px] text-white"
      >
        Search
      </button>
    </div>
  </div>
     </div>   
    )
}

export default SearchButton