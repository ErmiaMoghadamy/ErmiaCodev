import BlogClient from "./client"

export const metadata = {
    title: "Ermia Codev | Blog"
}

export default async function BlogPage() {
    const data = [
    ]

    return (
        <>
            <BlogClient data={data} />
        </>
    )
} 