import Link from "next/link";

export default function AssetsSection() {
    return (
        <section>
            <div className="flex justify-between">
                <Link target="_blank" href="/assets/Files/ErmiaMoghadamy-Resume.pdf" className="group w-full relative text-center cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hovertext-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
                    <span className="w-full relative px-2 py-1.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Download CV
                    </span>
                </Link>
                <Link target="_blank" href="/assets/ermiam-resume.pdf" className="group w-full relative text-center cursor-pointer inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-base font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hovertext-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800">
                    <span className="w-full relative px-2 py-1.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Certificate & Rewards
                    </span>
                </Link>
            </div>
        </section>
    )
}