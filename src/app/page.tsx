import { Notable } from "next/font/google"
import Link from "next/link";


const kanit = Notable({
  weight: "400",
  subsets: ["latin"]
});

export default function MiniCraft() {
  return (
    <main className="bg-background min-w-screen min-h-screen flex flex-col gap-10 items-center">
      <h1 className={`text-text text-center text-7xl ${kanit.className}`}>
          MiniCraft
      </h1>
      <p className="w-1/2 text-center text-secondary">
        <b className="text-primary">MiniCraft</b> is my personal portfolio platform designed to showcase my collection of mini projects. It serves as a digital space where I can organize, display, and reflect on the creative journey of my development work.
        <br /> <br />
        Built with cutting-edge tools like Vite and Tailwind CSS, MiniCraft provides a visually stunning and seamless experience. With its sleek dark theme, responsive design, and blazing-fast performance, this platform is crafted specifically to highlight my skills and projects in the most polished way possible.
      </p>
      <Link href={"/mini-projects"}>
        <button type="button"
          className="text-primary cursor-pointer px-4 py-2 text-lg font-semibold tracking-wider rounded-full border-2 bg-btn-bg hover:bg-btn-hover"
        >
          Get Started
        </button>
      </Link>

    </main>
  );
}
