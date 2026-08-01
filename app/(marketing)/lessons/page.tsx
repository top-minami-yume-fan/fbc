"use client";

import { useState } from "react";
import { LessonSession, sessions } from "@/lib/lessonSessions";
import LessonSessionsCards from "@/components/LessonSessionsCards";

export default function Lessons() {
    const [selectedSession, setSelectedSession] = useState<LessonSession | null>(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = (session: LessonSession) => {
        setSelectedSession(session);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedSession(null);
    };

    const lessonsTopContent = () => {
        return (
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
        )
    }

    return (
        <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-6xl space-y-8">
                <section className="rounded-4xl bg-white p-8 shadow-xl shadow-slate-200/50">
                    {lessonsTopContent()}
                </section>

                <LessonSessionsCards sessions={sessions} onCheckAvailability={openModal} />

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

                {showModal && selectedSession && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4">
                        <div className="w-full max-w-xl overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Availability</p>
                                    <h2 className="mt-2 text-3xl font-semibold text-slate-900">{selectedSession.day} · {selectedSession.level}</h2>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                                >
                                    Close
                                </button>
                            </div>

                            <div className="mt-6 space-y-4 text-slate-700">
                                <p className="text-sm leading-7">
                                    This class is currently full, but the waitlist is available. Please sign up to reserve your spot if one opens up.
                                </p>
                                <div className="rounded-3xl bg-slate-50 p-4 shadow-sm">
                                    <p className="text-sm font-semibold text-slate-900">Session details</p>
                                    <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
                                        <li><span className="font-semibold">Day:</span> {selectedSession.day}</li>
                                        <li><span className="font-semibold">Time:</span> {selectedSession.time}</li>
                                        <li><span className="font-semibold">Location:</span> {selectedSession.location}</li>
                                        <li><span className="font-semibold">Level:</span> {selectedSession.level}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                                <button
                                    onClick={closeModal}
                                    className="rounded-3xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                                >
                                    Close
                                </button>
                                <button
                                    className="rounded-3xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-400"
                                >
                                    Join waitlist
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
