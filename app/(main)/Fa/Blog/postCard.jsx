import Link from "next/link";

export default function PostCard({ post }) {
    return (
        <div className="card bg-base-100 dark:bg-gray-700 shadow-sm">
            <figure>
                <img
                    className=" aspect-video object-cover object-top"
                    src={post.thumbnail ?? ""}
                    alt={post.title ?? ""} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{post.title ?? ""}</h2>
                <div className="card-actions justify-end">
                    <Link href={`/Blog/${post.slug}/`} className="btn btn-primary rounded-xl">
                        Open
                    </Link>
                </div>
            </div>
        </div>
    )
}