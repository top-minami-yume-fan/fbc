import React from "react";
import DummyContent from "../../../components/DummyContent";

export default function About() {

    const paragraphContent = "Are your children looking for a fun and active way to improve their badminton skills? Then join our junior badminton class! Our experienced coaches will guide your child through thebasics and help them develop their technique, agility, and coordination."

    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Lessons
                    </h1>
                    <DummyContent content={paragraphContent} />
                </div>
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Winter 2026 Badminton Lessons
                        Registration Open!
                    </h1>
                    <DummyContent content={"schedule info"} />
                    <a href="https://docs.google.com/forms/d/1mVKi_-nBO7NFwHG1aySuc98q7xo8JVI1ya4-hOV7pWc">Registration</a>
                </div>
            </main>
        </div>
    );
}