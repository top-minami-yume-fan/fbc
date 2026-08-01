"use client";

import { IoLocationSharp } from "react-icons/io5";
import { LessonSession } from "@/lib/lessonSessions";

interface LessonSessionsCardsProps {
    sessions: LessonSession[];
    onCheckAvailability: (session: LessonSession) => void;
}

export default function LessonSessionsCards({ sessions, onCheckAvailability }: LessonSessionsCardsProps) {
    return (
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
                        <span className="ml-auto rounded-3xl bg-slate-200 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-300">
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
                        <button
                            onClick={() => onCheckAvailability(session)}
                            className="rounded-3xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
                        >
                            Check Availability
                        </button>
                    </div>
                </article>
            ))}
        </section>
    );
}
