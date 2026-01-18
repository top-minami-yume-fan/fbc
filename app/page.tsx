import Image from "next/image";
import DummyContent from "@/components/DummyContent";
import { getGalleryImages } from "@/lib/getGalleryImages";
import { getHomeWelcome } from "@/lib/getHomeWelcome";
import WideGallery from "@/components/WideGallery";

export default function Home() {
    const welcome_content = getHomeWelcome();

    return (
        <main className="flex flex-col">
            {/* Main section */}
            <section className="flex flex-col md:flex-row w-full min-h-[60vh] pb-24">
                <div className="w-2/3">
                    <WideGallery gallery_images={getGalleryImages()} />
                </div>

                {/* Text — right, 1/3 */}
                <div className="w-full md:w-1/3 flex flex-col justify-center px-6 md:px-10 pt-10 md:pt-8">
                    <h1 className="text-3xl font-bold mb-4">
                        Welcome to Fleetwood Badminton Club!
                    </h1>

                    <p className="mb-4">
                        About Us
                    </p>

                    <DummyContent content={welcome_content} />
                </div>
            </section>

            {/* Locations */}
            <section className="w-full flex flex-col md:flex-row gap-10 px-10 py-16">
                {/* Left: text */}
                <div className="md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">Class Location</h3>

                    <ul className="space-y-2">
                        <li><b>Gym 1</b>: 8606 162 St, Surrey, BC</li>
                        <li><b>Gym 2</b>: 8888 162 St, Surrey, BC</li>
                        <li><b>Gym 3</b>: 15353 92 Ave, Surrey, BC</li>
                        <li><b>Gym 4</b>: 1730 142 Street, Surrey, BC</li>
                    </ul>
                </div>

                {/* Right: map */}
                <div className="md:w-1/2 h-87.5 rounded-lg overflow-hidden">
                    <iframe
                        title="Fleetwood Badminton Club locations"
                        src="https://www.google.com/maps?q=Surrey%20BC&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

            {/* Flyer */}
            <section className="w-full flex flex-col justify-center md:flex-row gap-10 px-10 py-16 pb-32">
                <Image
                    src="/images/flyer-wide.png"
                    alt="Badminton Club Flyer"
                    width={500}
                    height={300}
                />
            </section>
        </main>
    );
}
