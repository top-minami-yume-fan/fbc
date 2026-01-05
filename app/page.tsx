import Image from "next/image";
import DummyContent from "@/components/DummyContent";

export default function Home() {

    const dummy_content = "Fleetwood Badminton Club (FBC) was founded in 2016, and started with various school gyms in Surrey on flexible schedules. FBC strives to create a great environment to learn, train, and play the sport of badminton.  Badminton is a fun and exciting sport that boosts one's physical, mental, and social well-being.  FBC will provide a safe and healthy environment for children and adults to play a sport they love while encouraging the development of a positive attitude and lifestyle."
    
    return (
        <div className="flex flex-col items-center p-10">
            <div>
                <h1>Welcome to Fleetwood Badminton Club!</h1>
            </div>
            <div>
                <Image
                    src="/images/placeholder.png"
                    alt="Badminton Club"
                    width={500}
                    height={300}
                />
            </div>
            <div>
                About Us
            </div>
            <div>
                <DummyContent content={dummy_content}/>
            </div>
            <div>
                <Image 
                    src="/images/flyer-wide.png"
                    alt="Badminton Club 2"
                    width={500}
                    height={300}
                />
            </div>
            <div>
                <h3>Class Location</h3>
                <ul>
                    <li><b>Gym 1</b>: 8606 162 St, Surrey, BC </li>
                    <li><b>Gym 2</b>: 8888 162 St, Surrey, BC </li>
                    <li><b>Gym 3</b>: 15353 92 Ave, Surrey, BC </li>
                    <li><b>Gym 4</b>: 1730 142 Street, Surrey,BC</li>
                </ul>
            </div>

        </div>
    );
}