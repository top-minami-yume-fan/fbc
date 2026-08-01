import Image from "next/image";
import ReactMarkdown from "react-markdown";

import getContent from "@/lib/getContent";
import SocialsModal from "@/components/SocialsModal";

/*
    Description
*/
export default async function Home() {
    const welcomeContent = await getContent("welcome.md");

    const heroSection = () => {
        return (
            <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[75vh]">
                <Image
                    src="/images/gallery/13.jpg"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                />

                {/* dark overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* overlay text: centered vertically and within left 50% (center at 25%) */}
                <div className="absolute inset-0 px-6">
                    <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 text-left max-w-lg md:max-w-2xl">
                        <h1 className="text-3xl md: font-bold text-white drop-shadow-lg leading-tight">
                            Fleetwood's Leading
                        </h1>
                        <h1 className="text-3xl md: font-bold text-white drop-shadow-lg leading-tight">
                            Badminton Academy.
                        </h1>
                    </div>
                </div>
            </div>
        )
    }

    const actionBoxes = () => {
        return (
            <section className="w-full flex justify-center px-10 py-8">
                <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                    <SocialsModal />

                    <a
                        href="/lessons"
                        className="block p-7 md:p-8 bg-white/90 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition duration-300 transform text-center"
                    >
                        <h4 className="font-semibold mb-2 text-lg text-green-800">Check our lesson schedule</h4>
                        <p className="text-base text-gray-700">See upcoming classes and book your spot.</p>
                    </a>
                </div>
            </section>
        )
    }


    const locationSection = () => {
        return (
            <section className="w-full px-6 md:px-10 py-16">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {/* Left: title + description + cards */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold mb-3">Class Locations</h3>
                        <p className="text-gray-700 mb -6">We run sessions across several gyms in Surrey — pick the nearest one and view it on the map or get directions.</p>

                        <div className="space-y-4">
                            {/** Gym cards */}
                            <div className="flex items-start gap-4 p-4 bg-white/90 rounded-lg shadow">
                                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-lg">🏸</div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">Gym 1</h4>
                                    <p className="text-sm text-gray-700">8606 162 St, Surrey, BC</p>
                                    <div className="mt-2 flex gap-4">
                                        <a href="https://www.google.com/maps/search/?api=1&query=8606+162+St+Surrey+BC" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600">View on map</a>
                                        <a href="https://www.google.com/maps/dir/?api=1&destination=8606+162+St+Surrey+BC" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700">Directions</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/90 rounded-lg shadow">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-lg">🏸</div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">Gym 2</h4>
                                    <p className="text-sm text-gray-700">8888 162 St, Surrey, BC</p>
                                    <div className="mt-2 flex gap-4">
                                        <a href="https://www.google.com/maps/search/?api=1&query=8888+162+St+Surrey+BC" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600">View on map</a>
                                        <a href="https://www.google.com/maps/dir/?api=1&destination=8888+162+St+Surrey+BC" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700">Directions</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/90 rounded-lg shadow">
                                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-lg">🏸</div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">Gym 3</h4>
                                    <p className="text-sm text-gray-700">15353 92 Ave, Surrey, BC</p>
                                    <div className="mt-2 flex gap-4">
                                        <a href="https://www.google.com/maps/search/?api=1&query=15353+92+Ave+Surrey+BC" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600">View on map</a>
                                        <a href="https://www.google.com/maps/dir/?api=1&destination=15353+92+Ave+Surrey+BC" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700">Directions</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 bg-white/90 rounded-lg shadow">
                                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-lg">🏸</div>
                                <div className="flex-1">
                                    <h4 className="font-semibold">Gym 4</h4>
                                    <p className="text-sm text-gray-700">1730 142 Street, Surrey, BC</p>
                                    <div className="mt-2 flex gap-4">
                                        <a href="https://www.google.com/maps/search/?api=1&query=1730+142+Street+Surrey+BC" target="_blank" rel="noopener noreferrer" className="text-sm text-green-600">View on map</a>
                                        <a href="https://www.google.com/maps/dir/?api=1&destination=1730+142+Street+Surrey+BC" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700">Directions</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: map pane */}
                    <div className="rounded-lg overflow-hidden h-72 md:h-full">
                        <iframe
                            title="Fleetwood Badminton Club locations"
                            src="https://www.google.com/maps?q=Fleetwood+Surrey+BC&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        )
    }

    const bottomSection = () => {
        return (
            <section className="w-full flex justify-center items-center px-10 py-16">
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
                {actionBoxes()}
            </section>

            <section className="w-full px-6 md:px-10 py-16 bg-green-50">
                <div className="max-w-5xl mx-auto prose prose-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-green-800">Welcome to Fleetwood Badminton Club</h2>
                    <ReactMarkdown>{welcomeContent}</ReactMarkdown>
                </div>
            </section>

            <section>
                {locationSection()}
            </section>

            <section className="w-full bg-slate-50 py-12">
                <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/50 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Got questions?</p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Contact us</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">Need help with camp details, lesson bookings, or membership info? We’re happy to answer your questions.</p>
                    </div>
                    <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-[1.2fr,1.2fr,0.8fr] md:w-auto">
                        <div className="rounded-3xl bg-slate-100 p-5 text-sm text-slate-700">
                            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Phone</p>
                            <p className="mt-2 font-semibold">778-776-5563, 604-283-9785</p>
                        </div>
                        <div className="rounded-3xl bg-slate-100 p-5 text-sm text-slate-700">
                            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Email</p>
                            <p className="mt-2 font-semibold">sports.fleetwood@gmail.com</p>
                        </div>
                        <button className="rounded-3xl bg-green-700 px-6 py-5 text-sm font-semibold text-white transition hover:bg-green-800">
                            Send a message
                        </button>
                    </div>
                </div>
            </section>

            <section>
                {bottomSection()}
            </section>
        </main>
    );
}
