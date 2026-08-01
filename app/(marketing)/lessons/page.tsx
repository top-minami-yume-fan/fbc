import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

const sessions = [
    {
        day: "Tuesday",
        level: "Beginner",
        time: "5:00pm - 7:00pm",
        location: "Frost Road Elementary School",
        description: "Beginner session description.",
    },
    {
        day: "Tuesday",
        level: "Intermediate",
        time: "7:00pm - 9:00pm",
        location: "Frost Road Elementary School",
        description: "Intermediate session description.",
    },
    {
        day: "Thursday",
        level: "Beginner",
        time: "5:00pm - 7:00pm",
        location: "Surrey Christian Elementary School",
        description: "Beginner session description.",
    },
    {
        day: "Thursday",
        level: "Intermediate",
        time: "7:00pm - 9:00pm",
        location: "Surrey Christian Elementary School",
        description: "Intermediate session description.",
    },
    {
        day: "Saturday",
        level: "Beginner",
        time: "10:00am - 12:00pm",
        location: "Surrey Christian Elementary School",
        description: "Beginner session description.",
    },
    {
        day: "Saturday",
        level: "Intermediate",
        time: "2:00pm - 4:00pm",
        location: "Surrey Christian Elementary School",
        description: "Intermediate session description.",
    },
    {
        day: "Sunday",
        level: "Beginner",
        time: "12:00pm - 2:00pm",
        location: "Surrey Christian Secondary School",
        description: "Beginner session description.",
    },
];

export default function Lessons() {
    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-6xl space-y-8">
                <section className="rounded-4xl bg-white p-8 shadow-xl shadow-slate-200/50">
                    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Lesson sessions</p>
                            <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
                                Weekly badminton schedule
                            </h1>
                        </div>
                        <p className="max-w-xl text-sm leading-6 text-slate-600">
                            Each session is shown like a calendar event with day, level and start/end time so you can quickly find the best class for your skill level.
                        </p>
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    {sessions.map((session) => (
                        <article
                            key={`${session.day}-${session.level}`}
                            className="group rounded-4xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                                <div className="space-y-3">
                                    <div className="text-sm font-semibold text-slate-700">
                                        <span>{session.day}</span>
                                    </div>
                                    <h2 className="text-2xl font-semibold text-slate-900">{session.level} Session</h2>
                                </div>
                                <span className="rounded-3xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                                    {session.time}
                                </span>
                            </div>

                            <p className="mt-6 text-sm leading-7 text-slate-600">{session.description}</p>

                            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
                                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-slate-200 text-slate-900">
                                        <IoLocationSharp className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-semibold text-slate-900">{session.location}</p>
                                </div>
                                <button className="ml-auto rounded-3xl bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-300">
                                    Add to calendar
                                </button>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="rounded-4xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Need help choosing?</p>
                            <h2 className="mt-2 text-3xl font-semibold">Find the best lesson for your level</h2>
                        </div>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-3xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
                        >
                            Contact us
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
