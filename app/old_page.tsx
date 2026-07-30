import Image from "next/image";
import ReactMarkdown from "react-markdown";

import getContent from "@/lib/getContent";

import { getGalleryImages } from "@/lib/getGalleryImages";
import WideGallery from "@/components/WideGallery";


/*
    Homepage component for the Fleetwood Badminton Club website. 
    This component fetches and displays the welcome content, a gallery of images, 
    location information, and a flyer image.
*/
export default async function Home() {
    const welcomeContent = await getContent("welcome.md");

    /* This is the main content for the homepage */
    const heroSection = () => {
        return (
            <section className="flex flex-col md:flex-row w-full min-h-[60vh] pb-24">

                <div className="w-2/3">
                    <WideGallery gallery_images={getGalleryImages()} />
                </div>
                
                <div className="w-full md:w-1/3 flex flex-col justify-center px-6 md:px-10 pt-10 md:pt-8">
                    <h1 className="text-3xl font-bold mb-4">
                        Welcome to Fleetwood Badminton Club!
                    </h1>

                    <p className="mb-4">
                        About Us
                    </p>

                    <ReactMarkdown>{welcomeContent}</ReactMarkdown>
                </div>
            </section>
        )
    }


    const locationSection = () => {
        return (
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
        )
    }

    const bottomSection = () => {
        return (
            <section className="w-full flex flex-col justify-center px-10 py-16">
                <Image
                    src="/images/flyer-wide.png"
                    alt="Badminton Club Flyer"
                    width={500}
                    height={300}
                />
            </section>
        )
    }

    return (
        <main className="flex flex-col">

            <section>
                {heroSection()}
            </section>

            <section>
                {locationSection()}
            </section>

            <section>
                {bottomSection()}
            </section>
        </main>
    );
}
