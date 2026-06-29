"use client";

import { useEffect, useMemo, useState } from "react";
import { getCountries } from "@/services/country.services";
import CountryCard from "./CountryCard";

const PAGE_SIZE = 10;

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    getCountries(visible).then((data)=>{
      setCountries(data);
      setIsLoading(false)
    });
  }, [visible]);

  const filtered = useMemo(() => {
    if (filter === "All") return countries;

    return countries.filter(
      (country: any) => country.region === filter
    );
  }, [countries, filter]);

  return (
    <>
      <div className="flex gap-6 mb-8">
        {["All", "Asia", "Europe"].map((item, ind) => (
          <button
            key={ind}
            onClick={() => {
              setFilter(item);
              setVisible(PAGE_SIZE);
            }}
            className={
              filter === item
                ? "border-b-2 border-black"
                : ""
            }
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {filtered
          .slice(0, visible)
          .map((country: any) => (
            <CountryCard
              key={country.name.common}
              country={country}
            />
          ))}
      </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="bg-black/80 text-white px-6 py-2 cursor-pointer hover:bg-black disabled:cursor-not-allowed disabled:opacity-40 rounded-md"
            disabled={countries.length === 200}
          >
            {isLoading? "Loading..." : "Load More "}
          </button>
        </div>
    </>
  );
}