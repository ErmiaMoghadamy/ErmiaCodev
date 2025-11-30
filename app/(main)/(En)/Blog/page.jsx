import BlogClient from "./client"

export const metadata = {
    title: "Ermia Codev | Blog"
}

export default async function BlogPage() {
    const data = [
        { id: 0, title: "asd", caption: "asd", thumbnail: "/assets/Courses.png" },
        { id: 0, title: "asd", caption: "asd", thumbnail: "/assets/Courses.png" },
    ]

    return (
        <>
            <BlogClient data={data} />
        </>
    )
} 