import Image from "next/image";
import Link from "next/link";

export default function HeroMiniPost({ title, link, thumbnail, linkTxt }) {
    return (
        <Link href={link}>
            <div className="group cursor-pointer p-2 bg-white dark:bg-gray-700 rounded-xl flex gap-4 shadow-sm hover:shadow-md">
                <Image className="border-3 overflow-hidden rounded-xl w-4/5 aspect-video object-cover" src={thumbnail} alt={title} width={300} height={300} />
                <div className="py-4 lg:py-6">
                    <h2 className="text-lg lg:text-xl font-bold">{title}</h2>
                    <p className="pt-4 group-hover:underline text-primary">
                        {linkTxt}
                    </p>
                </div>
            </div>
        </Link>
    )
}