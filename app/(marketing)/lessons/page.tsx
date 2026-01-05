import React from "react";
import Image from "next/image";
import DummyContent from "@/components/DummyContent";

export default function Lessons() {

    const paragraphContent = "Are your children looking for a fun and active way to improve their badminton skills? Then join our junior badminton class! Our experienced coaches will guide your child through thebasics and help them develop their technique, agility, and coordination."

    return (
        <div className="flex flex-col items-center gap-4 p-4">

            <div>
                <h1>Lessons</h1>
            </div>

            <div className="flex flex-row">
                <div>
                    <Image
                        src="/images/placeholder.png"
                        alt="Badminton Lessons"
                        width={250}
                        height={250}
                    />
                </div>
                <div>
                    <DummyContent content={paragraphContent} />
                </div>
            </div>

            <div>
                <div>
                    <h2>
                        Winter 2026 Badminton Lessons
                    </h2>
                    <h3>
                        Registration Open!
                    </h3>
                </div>
                <div>
                    <h3>North Surrey</h3>
                    <ul>
                        <li>Tuesday Night ( Jan 06 - Mar 10, 2026 )</li>
                        <li>Thursday Night ( Jan 08 - Mar 12, 2026 )</li>
                        <li>Saturday Night ( Jan 10 - Mar 7, 2026 )</li>
                        <li>Sunday Afternoon ( Jan 11 - Mar 08, 2026 )</li>
                    </ul>
                    <a href="https://docs.google.com/forms/d/1LbfVQAj4FTMIt3HUyaSWDujWGu0DLumjHHjr4yIDweg">Registration</a>
                </div>
                <div>
                    <h3>South Surrey</h3>
                    <ul>
                        <li>Monday Night ( Jan 05 - Mar 09, 2026 )</li>
                        <li>Wednesday Night ( Jan 07 - Mar 11, 2026 )</li>
                    </ul>
                    <a href="https://docs.google.com/forms/d/1mVKi_-nBO7NFwHG1aySuc98q7xo8JVI1ya4-hOV7pWc">Registration</a>
                </div>
            </div>

        </div>
    );
}