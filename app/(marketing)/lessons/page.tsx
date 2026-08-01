import Image from "next/image";

export default function Lessons() {

    return (
        <main className="w-full min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-10">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
                <section className="rounded-[2rem] bg-gradient-to-r from-green-600 via-emerald-600 to-slate-900 p-10 shadow-2xl shadow-slate-900/10 text-white">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Lorem ipsum</p>
                            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h1>
                            <p className="mt-4 max-w-xl text-base leading-7 text-emerald-100/90">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="grid w-full max-w-sm gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl bg-white/10 p-5 text-sm">
                                <p className="uppercase tracking-[0.2em] text-emerald-200">Lorem ipsum</p>
                                <p className="mt-2 text-lg font-semibold">Dolor sit amet</p>
                            </div>
                            <div className="rounded-3xl bg-white/10 p-5 text-sm">
                                <p className="uppercase tracking-[0.2em] text-emerald-200">Consectetur</p>
                                <p className="mt-2 text-lg font-semibold">Adipiscing elit</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
                    <div className="space-y-6 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/60">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Lorem ipsum</p>
                                <h2 className="mt-2 text-3xl font-semibold text-slate-900">Dolor sit amet consectetur</h2>
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                Lorem ipsum dolor
                            </div>
                        </div>

                        <div className="grid gap-4 lg:grid-cols-5">
                            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                <div key={day} className="rounded-3xl bg-slate-100 px-4 py-5 text-center text-sm font-semibold text-slate-700">
                                    {day}
                                </div>
                            ))}
                        </div>

                        <div className="grid gap-4">
                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
                                <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-4 text-slate-500">
                                    <p className="text-sm uppercase tracking-[0.2em]">Lorem</p>
                                    <p className="mt-2 text-base font-semibold">Ipsum dolor</p>
                                </div>
                                <div className="rounded-3xl bg-emerald-50 p-4 text-slate-900 shadow-sm shadow-emerald-200/50">
                                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">Dolor</p>
                                    <p className="mt-2 text-base font-semibold">Sit amet</p>
                                </div>
                                <div className="rounded-3xl bg-white p-4 text-slate-900 shadow-sm shadow-slate-200/60">
                                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Consectetur</p>
                                    <p className="mt-2 text-base font-semibold">Adipiscing elit</p>
                                </div>
                                <div className="rounded-3xl bg-emerald-50 p-4 text-slate-900 shadow-sm shadow-emerald-200/50">
                                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">Sed</p>
                                    <p className="mt-2 text-base font-semibold">Do eiusmod</p>
                                </div>
                                <div className="rounded-3xl bg-white p-4 text-slate-900 shadow-sm shadow-slate-200/60">
                                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Tempor</p>
                                    <p className="mt-2 text-base font-semibold">Incididunt ut</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
                                <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-4 text-slate-500">
                                    <p className="text-sm uppercase tracking-[0.2em]">9:00am</p>
                                    <p className="mt-2 text-base font-semibold">Weekend Clinic</p>
                                </div>
                                <div className="rounded-3xl bg-white p-4 text-slate-900 shadow-sm shadow-slate-200/60">
                                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Fri</p>
                                    <p className="mt-2 text-base font-semibold">No lessons</p>
                                </div>
                                <div className="rounded-3xl bg-emerald-50 p-4 text-slate-900 shadow-sm shadow-emerald-200/50 lg:col-span-3">
                                    <p className="text-sm uppercase tracking-[0.2em] text-emerald-600">Sat</p>
                                    <p className="mt-2 text-base font-semibold">Weekend Clinic</p>
                                    <p className="mt-2 text-sm text-slate-600">2-hour open training for all levels, drills, and match play.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <aside className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/60">
                        <div className="flex items-center gap-4">
                            <div className="rounded-3xl bg-emerald-600 p-3 text-white">
                                <Image src="/icons/calendar.svg" alt="Calendar" width={28} height={28} />
                            </div>
                            <div>
                                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Lorem ipsum</p>
                                <h3 className="text-2xl font-semibold text-slate-900">Dolor sit amet</h3>
                            </div>
                        </div>

                        <div className="mt-8 space-y-6">
                            <div className="rounded-3xl bg-slate-50 p-5 shadow-sm shadow-slate-200/50">
                                <p className="text-sm font-semibold text-slate-900">Lorem ipsum</p>
                                <p className="mt-2 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <div className="rounded-3xl bg-slate-50 p-5 shadow-sm shadow-slate-200/50">
                                <p className="text-sm font-semibold text-slate-900">Dolor sit amet</p>
                                <p className="mt-2 text-sm text-slate-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-100 p-6">
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Lorem ipsum</p>
                            <p className="mt-3 text-lg font-semibold text-slate-900">Dolor sit amet consectetur</p>
                            <p className="mt-3 text-sm text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <button className="mt-6 w-full rounded-3xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                                Lorem ipsum
                            </button>
                        </div>
                    </aside>
                </section>

                <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50">
                    <div className="prose max-w-none text-slate-700">
                        <h2 className="text-2xl font-semibold text-slate-900">Lorem ipsum dolor sit amet</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </section>
            </div>
        </main>
    );
}
