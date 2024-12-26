"use client"
import { Notable } from "next/font/google"
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import SparklesText from "@/components/ui/sparkles-text";
import { BorderBeam } from "@/components/ui/border-beam";
import PulsatingButton from "@/components/ui/pulsating-button";

const kanit = Notable({
  weight: "400",
  subsets: ["latin"]
});
export default function MiniCraft() {
  
  return (
    <>
      <main className="bg-black overflow-hidden relative w-screen h-screen flex flex-col gap-5 items-center">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.3}
        duration={3}
        repeatDelay={0.1}
        height={50}
        width={50}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] absolute text-text z-0 h-[150%] skew-y-12",
        )}
        />
        <SparklesText
          className={`${kanit.className} text-text relative pt-[20vh]`}
          text="MiniCraft" />
        
        <p className="w-1/2 text-center my-10 text-text">
          <b className="">MiniCraft</b> is my personal portfolio platform designed to showcase my collection of mini projects. It serves as a digital space where I can organize, display, and reflect on the creative journey of my development work.
          <br /> <br />
          <span className="">
            Built with cutting-edge tools like Vite and Tailwind CSS, MiniCraft provides a visually stunning and seamless experience. With its sleek dark theme, responsive design, and blazing-fast performance, this platform is crafted specifically to highlight my skills and projects in the most polished way possible.
          </span>
        </p>
        <Link href={"/mini-projects"}>
          <PulsatingButton className="rounded-full bg-[#e0e0e0] my-10 text-black font-semibold tracking-wider px-5" pulseColor="#555">
            Get Started
          </PulsatingButton>
          <BorderBeam
            size={800}
            delay={5}
            duration={10}
            borderWidth={2}
          />
          {/* <button type="button"
            className="text-prime cursor-pointer px-4 py-2 text-lg font-semibold tracking-wider rounded-full border-2 bg-btn-bg hover:bg-btn-hover"
          >
            Get Started
          </button> */}
        </Link>

      </main>
    </>
  );
}
