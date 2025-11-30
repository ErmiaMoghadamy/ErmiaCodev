import PostCard from "./postCard";

export default function BlogClient({ data }) {
    return (
        <div className="px-4 pt-8 container mx-auto max-w-6xl">
            <h1 className="text-center font-bold text-3xl">
                ErmiaCodev's Blog | Posts
            </h1>
            <section className="mt-12 grid grid-cols-3 gap-2">
                {
                    data.map((post, i) => (
                        <PostCard key={i} post={post} />
                    ))
                }
            </section>
        </div>
    )
} 