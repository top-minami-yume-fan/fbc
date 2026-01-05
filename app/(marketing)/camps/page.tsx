import React from "react";
import Image from "next/image";
import DummyContent from "@/components/DummyContent";

export default function Camps() {

    const paragraphContent = "Get ready to soar to new heights as we dive into exciting drills. friendly competitions, and expert coaching. Let the shuttlecock fly, as we elevate your skills and passion for badminton. Join us for a Summer of fun, fitness, and fantastic rallies!"
    const paragraphContent2 = "The class is for students who already have a good badminton foundation. The coaches will strengthen the student's skills and physical fitness training in the training class. At the same time, the coaches will organize various lively and engaging matches among the students, explain and demonstrate team coordination and game strategies, and improve the students' teamwork and competitive awareness."
    
    return (
        <div className="flex flex-col items-center gap-4 p-4">
            
            <div>
                <h1>Camps</h1>
            </div>

            <div className="flex flex-row-reverse gap-4 p-4">
                <div>
                    <DummyContent content={paragraphContent} />
                </div>         
                <Image
                    src="/images/camps/camps-2.png"
                    alt="Badminton Camps"
                    width={250}
                    height={250}
                />
            </div>

            <hr />

            <div className="flex flex-row gap-4 p-4">   
                <div>
                    <DummyContent content={paragraphContent2} />
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