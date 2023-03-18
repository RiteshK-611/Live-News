"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const [input, setInput] = useState("");
  const router = useRouter()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!input) return
    
    router.push(`/search?term=${input}`) // using query params but can also use dynamic route like ==> /search/{input} <== Dynamic route is good for ISR (Incremental Static Regeneration) like if in thia case if particular news article is getting searched/clicked again & again then that article will be loaded fastly
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-500"
      />

      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
