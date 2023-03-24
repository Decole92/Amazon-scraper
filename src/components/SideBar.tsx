"use client";
import { db } from "@/firebase";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { collection, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import SidebarRow from "./SidebarRow";

function SideBar() {
  const [snapshot, loading, error] = useCollection(
    query(collection(db, "searches"), orderBy("start_eta", "desc"))
  );
  return (
    <div className="flex flex-col items-center p-2 md:p-10 border-b border-indigo-500/50">
      <div className="flex flex-col items-center mb-10 ">
        <Image
          src={require("../../public/sca.png")}
          alt="scraper"
          className="text-indigo-600"
          height="100"
          width="100"
        />
        <h1 className="hidden md:inline text-3xl mt-3 pb-2">Web Scraper</h1>
        <h1 className="hidden md:inline text-center">
          Scraping the Unscrapable!!!
        </h1>
      </div>
      <div className="scrollbar-thin w-full">
        <ul className="flex flex-col gap-2 py-2 overflow-x-auto ">
          {snapshot?.docs?.map((doc) => (
            <SidebarRow key={doc.id} doc={doc} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
