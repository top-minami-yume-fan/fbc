import Image from "next/image";
import DummyContent from "@/components/DummyContent";
import { getMarkdownContent } from "@/lib/getMarkdownContent";

export default function Services() {

    return (
        <div className="flex flex-col items-center gap-4 p-4">
        
            <div className="flex flex-col">
                <div>
                    <h1>Stringing Service</h1>
                </div>
                <div>
                    <DummyContent content={getMarkdownContent("stringing.md")}/>
                </div>

                <div>
                    <h2>String Type</h2>
                </div>

                <div>
                    <p>Yonex BG65    $25</p>
                </div>               
                <div>
                    <p>Yonex NBG95   $28</p>
                </div>

            </div>

            <div className="flex flex-row gap-4">
                <div>
                    <Image
                        src="/images/stringing/stringing-1.png"
                        alt="Stringing Service"
                        width={250}
                        height={250}
                    />
                </div>
                <div>
                    <Image
                        src="/images/stringing/stringing-2.png"
                        alt="Stringing Service"
                        width={250}
                        height={250}
                    />
                </div>
            </div>

        </div>
    );
}