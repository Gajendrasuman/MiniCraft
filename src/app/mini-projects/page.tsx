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
                </div>
            </section>
        </main>
    )
}