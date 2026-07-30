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

            <div className="flex flex-row gap-4 p-4">
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