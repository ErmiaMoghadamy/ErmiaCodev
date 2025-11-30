import Navbar from "@/components/navbar";

export default function FaLayout({ children }) {
    return (
        <div dir="ltr">
            <Navbar lang="en" />
            {children}
        </div>
    )
}