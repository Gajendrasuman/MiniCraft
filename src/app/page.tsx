import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { BorderBeam } from "@/components/ui/border-beam";

export default function MiniCraft() {
  return (
    <main className="bg-gradient-to-b from-gray-800 to-black overflow-hidden relative w-full min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-12">

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={0.1}
        height={50}
        width={50}
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] absolute text-text z-0 h-[150%] skew-y-12"
        )}
      />

      <h1 className={`title  relative pt-[20vh] text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text animate-gradient`}>
        MiniCraft
      </h1>

      <p className="w-full md:w-2/3 lg:w-1/2 text-center my-10 text-gray-300 text-lg">
        <b className="text-white">MiniCraft</b> is my personal portfolio platform designed to showcase my collection of mini projects.
        <br /> <br />
        <span>
          Built with cutting-edge tools like Vite and Tailwind CSS, MiniCraft provides a visually stunning and seamless experience. With its sleek dark theme, responsive design, and blazing-fast performance, this platform is crafted specifically to highlight my skills and projects in the most polished way possible.
        </span>
      </p>

      <Link href="/mini-projects">
        <BorderBeam
          size={800}
          delay={1}
          duration={10}
          borderWidth={2}
          className="mb-5"
        />
        <button
          type="button"
          className="text-white cursor-pointer px-6 py-3 text-lg transition-all transform duration-300 font-semibold tracking-wider rounded-full border-2 bg-primary hover:bg-primary-dark"
        >
          Get Started
        </button>
      </Link>
    </main>
  );
}
