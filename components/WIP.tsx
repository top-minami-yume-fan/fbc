import Image from "next/image";

export default function WIP() {
    return (
        <div className="flex flex-col-reverse items-center gap-4">
            <h3>This page is under construction. Please check back later.</h3>
            <Image
                src="/icons/wrench-driver.svg"
                alt="Work In Progress"
                width={300}
                height={300}
            />
        </div>

    );
}   