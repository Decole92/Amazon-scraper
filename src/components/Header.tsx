"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import toast from "react-hot-toast";

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;
    if (!input) return;

    const notification = toast.loading(`Scraping for ${input}`);

    if (input) {
      inputRef.current.value = "";
    }

    try {
      //call to api
      const response = await fetch("/api/activateScraper", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: input }),
      });

      const { collection_id, start_eta } = await response.json();

      toast.success("Scraping mode activated!", {
        id: notification,
      });

      router.push(`/search/${collection_id}`);
    } catch (err) {
      console.warn(err);
      toast.error("Something went wrong", {
        id: notification,
      });
    }
  };

  return (
    <header className="items-center">
      <form
        onSubmit={handleSearch}
        className="flex bg-indigo-100 space-x-2 justify-center items-center p-2 py-2 px-4 rounded-full max-w-md mx-auto"
      >
        <input
          ref={inputRef}
          type="text"
          className="focus:outline-none p-2 flex-1 bg-inherit text-indigo-400"
          placeholder="search..."
        />
        <button hidden></button>
        <MagnifyingGlassIcon className="h-6 w-6 text-indigo-300" />
      </form>
    </header>
  );
}

export default Header;
