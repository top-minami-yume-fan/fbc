"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface CarouselImage {
    src: string;
    alt: string;
}

interface WideGalleryProps {
    gallery_images: CarouselImage[];
    intervalMs?: number;
}

export default function WideGallery({
    gallery_images,
    intervalMs = 4000,
}: WideGalleryProps) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const startX = useRef<number | null>(null);

    const total = gallery_images.length;

    /* ---------------- autoplay ---------------- */
    useEffect(() => {
        if (paused || total <= 1) return;

        const id = setInterval(() => {
            setIndex((i) => (i + 1) % total);
        }, intervalMs);

        return () => clearInterval(id);
    }, [paused, intervalMs, total]);

    /* ---------------- controls ---------------- */
    const next = () => setIndex((i) => (i + 1) % total);
    const prev = () => setIndex((i) => (i - 1 + total) % total);

    /* ---------------- swipe ---------------- */
    const onTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e: React.TouchEvent) => {
        if (startX.current === null) return;

        const diff = startX.current - e.changedTouches[0].clientX;
        startX.current = null;

        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
        }
    };

    return (
        <div
            className="relative w-full h-full overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            {/* Images */}
            {gallery_images.map((img, i) => (
                <Image
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className={`
                        absolute inset-0
                        object-cover
                        transition-opacity duration-700 motion-reduce:transition-none
                        ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}
                    `}
                />

            ))}

            {/* Prev / Next buttons */}
            <button
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
            >
                ‹
            </button>

            <button
                onClick={next}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
            >
                ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                {gallery_images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                        className={`h-2 w-2 rounded-full transition
              ${i === index ? "bg-white" : "bg-white/50 hover:bg-white"}
            `}
                    />
                ))}
            </div>
        </div>
    );
}
