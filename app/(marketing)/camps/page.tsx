import Image from "next/image";
import DummyContent from "@/components/DummyContent";
import getContent from "@/lib/getContent";

export default async function Camps() {
    const summerCampContent = await getContent("summer_camp.md");
    const trainingClassContent = await getContent("training_class.md");

    return (
        <div className="flex flex-col items-center gap-4 p-4">

            <div>
                <h1>Camps</h1>
            </div>

            <div className="flex flex-row-reverse gap-4 p-4">
                <div>
                    <DummyContent content={summerCampContent} />
                </div>
                <Image
                    src="/images/camps/camps-2.png"
                    alt="Badminton Camps"
                    width={250}
                    height={250}
                />
            </div>

            <hr />

            <div className="w-full max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Got questions?</p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Contact us</h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">Reach out anytime for camp details, schedule questions, or registration support.</p>
                    </div>

                    <div className="grid w-full gap-3 sm:grid-cols-3 md:w-auto">
                        <div className="rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm shadow-slate-200/70">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Phone</p>
                            <p className="mt-1 font-medium">+1 (555) 123-4567</p>
                        </div>
                        <div className="rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm shadow-slate-200/70">
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
                            <p className="mt-1 font-medium">info@badmintonclub.com</p>
                        </div>
                        <button className="rounded-2xl bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
                            Send a message
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap justify-center items-center gap-4 p-4">
                <div>
                    <DummyContent content={trainingClassContent} />
                </div>
                <Image
                    src="/images/camps/camps-3.png"
                    alt="Badminton Camps"
                    width={250}
                    height={250}
                />
            </div>
        </div>
    );
}