"use client";
import Image from "next/image";
import { TypewriterEffect, TypewriterEffectSmooth } from "../ui/typewriter";
import { FlipWords } from "../ui/flip-words";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation"; // Import the useRouter hook from next/navigation

const robotoThin = Roboto({ weight: "100", subsets: ["latin"] });
const robotoRegular = Roboto({ weight: "400", subsets: ["latin"] });

const Hero = () => {
  const router = useRouter(); // Initialize the router hook
  const words = [
    {
      text: "SR",
      className: `text-red-700 dark:text-blue-500 ${robotoThin.className}`,
    },
    {
      text: "Samachar",
      className: `text-black dark:text-blue-500 ${robotoThin.className}`,
    },
  ];
  const tag = ["Satya", "Saral", "Nispaksh"];

  // Function to handle the link click and redirect
  const handleLinkClick = (url: string) => {
    router.push(url); // Use Next.js router to navigate to the URL
  };

  return (
    <div className="relative min-h-screen bg-customYellow flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20 pointer-events-none"
        src="videos/bg_video.mp4" // Replace with the correct path to your video
        autoPlay
        loop
        muted
      />
      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-bold flex flex-col items-center">
          <TypewriterEffect words={words} />
          <span
            className={`block text-2xl text-black mt-6 ${robotoRegular.className}`}
          >
            <FlipWords words={tag} />
          </span>
        </h1>

        {/* Single Column Layout for Marquee Text and Static GIFs */}
        <div className="mt-8 w-full flex flex-col items-center space-y-4">
          {/* Marquee Container */}
          <div className="w-full overflow-hidden max-w-full">
            <div className="flex flex-col space-y-4">
              {[...Array(4)].map((_, index) => (
                <div className="flex items-center space-x-4 w-full" key={index}>
                  <Image
                    src="/gifs/new.gif" // Replace with the correct path to your GIF
                    alt="New"
                    width={50}
                    height={50}
                  />
                  <div className="overflow-hidden w-full">
                    <div className="animate-marquee flex items-center flex-wrap"> {/* Changed to allow wrapping */}
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(`/blog/${index + 1}`); // Redirect to /blog/{index+1}
                        }}
                        className={`text-lg text-black ${robotoRegular.className} cursor-pointer hover:text-blue-500`}
                      >
                        {/* Blog Post Titles */}
                        {index === 0 && "पुष्पा 2 ने तोड़ा रिकॉर्ड, 100 करोड़ की एडवांस बुकिंग!"}
                        {index === 1 && "भारत मोबिलिटी एक्सपो 2025: ऑटो उद्योग का महाकुंभ"}
                        {index === 2 && "गोविंदा का चौंकाने वाला खुलासा: 'भागम भाग 2' के लिए नहीं किया गया संपर्क, लेकिन वापसी के लिए तैयार!"}
                        {index === 3 && "महाराष्ट्र में मुख्यमंत्री पद का सस्पेंस खत्म, फडणवीस बने नेता, शिंदे ने डिप्टी सीएम पद स्वीकार किया!"}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
