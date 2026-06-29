"use client";

import { getCountries } from "@/services/country.services";
import { useEffect, useState } from "react";

interface Country {
    name: {
        common: string;
    };
    flags: {
        png: string;
    };
    region: string;
}

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    const [slides, setSlides] = useState<Country[]>([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const data = await getCountries();

                setSlides(data.slice(1, 6));
            } catch (error) {
                console.error(error);
            }
        };

        fetchCountries();
    }, []);

    const next = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const previous = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    if (!slides.length) {
        return (
            <div className="h-80 flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="relative">
                <img
                    src={slides[current].flags.png}
                    alt={slides[current].name.common}
                    className="w-full h-80 object-cover rounded-xl border border-gray-400 shadow"
                />

            <button
                onClick={previous}
                className="absolute left-4 bottom-4 bg-white border px-3 py-2 rounded-full"
            >
                ←
            </button>

            <button
                onClick={next}
                className="absolute right-4 bottom-4 bg-white border px-3 py-2 rounded-full"
            >
                →
            </button>

            <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full ${current === index ? "bg-black" : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}