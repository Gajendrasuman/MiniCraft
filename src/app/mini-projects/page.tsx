import Link from "next/link"

export default function MiniProjects(): React.ReactNode {
    return (
        <main>
            <section className="bg-bg min-w-screen min-h-screen">
                <div className="flex flex-wrap gap-10 justify-center items-center">
                    <Link href={"/mini-projects/pages/analog-clock"}>
                        <div className="p1 text-text">
                            ANALOG CLOCK
                        </div>
                    </Link>
                    <Link href={"/mini-projects/pages/mi-tv"}>
                        <div className="p1 text-text">
                            MI TV
                        </div>
                    </Link>
                    <Link href={"/mini-projects/pages/speech-to-text"}>
                        <div className="p1 text-text">
                            Speech to Text
                        </div>
                    </Link>
                    <Link href={"/mini-projects/pages/sticky-notes"}>
                        <div className="p1 text-text">
                            Sticky Notes
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    )
}