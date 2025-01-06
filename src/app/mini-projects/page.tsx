import Link from "next/link";
import Image from "next/image";
import imgLoader from "@/components/ui/global/imgLoader";

export default function MiniProjects(): React.ReactNode {
    return (
        <main className="bg-bg min-w-screen min-h-screen flex justify-center items-center py-10 scroll-smooth relative">
            <section className="w-full px-6 md:px-12">
                <h2 className="text-center text-4xl font-semibold text-text mb-12 animate__animated animate__fadeIn animate__delay-1s">
                    Mini Projects Gallery
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <Link href="/mini-projects/pages/analog-clock" passHref>
                        <div className="relative project rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:transition-all">
                            <video muted loop autoPlay playsInline className="w-full h-72 object-cover transition-transform transform hover:scale-110">
                                <source src="/assets/images/home/analog_clock.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                Analog Clock
                            </div>
                        </div>
                    </Link>

                    <Link href="/mini-projects/pages/mi-tv" passHref>
                        <div className="relative project rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:transition-all">
                            <Image
                                src="/assets/images/home/mi_tv.png"
                                width={150}
                                height={120}
                                alt="Mi TV"
                                loader={imgLoader}
                                className="w-full h-72 object-cover transition-transform transform hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                Mi TV
                            </div>
                        </div>
                    </Link>

                    <Link href="/mini-projects/pages/speech-to-text" passHref>
                        <div className="relative project rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:transition-all">
                            <Image
                                src="/assets/images/home/speech_to_text.png"
                                width={150}
                                height={120}
                                alt="Speech To Text"
                                loader={imgLoader}
                                className="w-full h-72 object-cover transition-transform transform hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                Speech To Text
                            </div>
                        </div>
                    </Link>

                    <Link href="/mini-projects/pages/sticky-notes" passHref>
                        <div className="relative project rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:transition-all">
                            <Image
                                src="/assets/images/home/sticky_notes.png"
                                width={150}
                                height={120}
                                alt="Sticky Notes"
                                loader={imgLoader}
                                className="w-full h-72 object-cover transition-transform transform hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                                Sticky Notes
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="absolute bottom-10 right-10">
                    <Link href="#top">
                        <button className="text-white bg-primary hover:bg-primary-dark px-6 py-3 rounded-full shadow-lg transition-all transform hover:scale-105">
                            Scroll to Top
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
