import Image from "next/image";
import DummyContent from "@/components/DummyContent";
import { getGalleryImages } from "@/lib/getGalleryImages";
import { getHomeWelcome } from "@/lib/getHomeWelcome";
import WideGallery from "@/components/WideGallery";

export default function Home() {

    const welcome_content = getHomeWelcome();

    return (
        <div className="flex flex-col items-center p-10">
            <WideGallery gallery_images={getGalleryImages()} />
            <div>
                <Image
                    src="/images/placeholder.png"
                    alt="Badminton Club"
                    width={500}
                    height={300}
                    className="w-auto h-auto"
                />
            </div>
            <div>
                <h1>Welcome to Fleetwood Badminton Club!</h1>
            </div>
            <div>
                About Us
            </div>
            <div>
                <DummyContent content={getHomeWelcome()}/>
            </div>
            <div>
                <Image 
                    src="/images/flyer-wide.png"
                    alt="Badminton Club 2"
                    width={500}
                    height={300}
                    className="w-auto h-auto"
                />
            </div>
            <div>
                <h3>Class Location</h3>
                <ul>
                    <li><b>Gym 1</b>: 8606 162 St, Surrey, BC </li>
                    <li><b>Gym 2</b>: 8888 162 St, Surrey, BC </li>
                    <li><b>Gym 3</b>: 15353 92 Ave, Surrey, BC </li>
                    <li><b>Gym 4</b>: 1730 142 Street, Surrey,BC</li>
                </ul>
            </div>

        </div>
    );
}