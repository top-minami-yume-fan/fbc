import React from "react";
import Image from "next/image";
import DummyContent from "@/components/DummyContent";

export default function DropIn() {

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div className="flex flex-row">
                <div><p>Make Friends</p></div>
                <div></div>
            </div>
            <div className="flex flex-row-reverse">
                <div><p>And Have Fun!</p></div>
                <div></div>
            </div>

            <Image
                src="/images/placeholder.png"
                alt="Drop-In Play"
                width={250}
                height={250}
            />
        </div>
    );
}