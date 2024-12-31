import Link from "next/link";
import { Notable } from "next/font/google";
import Navbar from "@/components/ui/global/navbar";

const kanit = Notable({
    weight: "400",
    subsets: ["latin"]
});

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="h-[76px]"></div>
        <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
            <section className="w-full max-w-screen-lg text-center">
                <h1
                    className={`${kanit.className} text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 mb-6`}
                >
                    About Me
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                    Hi! I'm <strong className="text-white">Gajender Suman</strong>, a passionate developer, tech enthusiast, and creator.
                    I specialize in building engaging digital experiences with modern web technologies, including Next.js, TypeScript, Tailwind CSS, and more.
                </p>

                <p className="text-xl text-gray-300 mb-6">
                    With a focus on performance, design, and usability, my goal is to create beautiful and user-friendly websites and applications.
                    Whether it's building something from scratch or refining an existing idea, I’m constantly pushing myself to learn and grow.
                </p>

                <p className="text-xl text-gray-300 mb-6">
                    I am also active on social media and share my experiences, insights, and projects. You can connect with me on <Link href="https://twitter.com/Orogamyyy" passHref>
                        <span className="text-pink-500 hover:text-pink-400">Twitter</span>
                    </Link> or check out my work on <Link href="https://github.com/Gajendrasuman" passHref>
                        <span className="text-blue-500 hover:text-blue-400">GitHub</span>
                    </Link>.
                </p>

                <div className="flex justify-center gap-6 mt-10">
                    <Link href="mailto:contact@orogamy.com">
                        <button className="bg-gradient-to-r from-pink-500 to-blue-500 px-8 py-3 rounded-full text-lg font-semibold text-white hover:bg-gradient-to-l transition-all duration-300">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </section>
        </main>
        </>
    );
}
