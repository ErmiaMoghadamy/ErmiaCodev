import Navbar from "@/components/navbar"
import { Vazirmatn } from "next/font/google"

const font = Vazirmatn()

export const metadata = {
  title: "ارمیا مقدمی",
  description: "Ermia Codev: DataScience & DevOps Tutorial",
};

export default function FaLayout({ children }) {
    return (
        <div style={font.style} dir="rtl">
            <Navbar lang="fa" />
            {children}
        </div>
    )
}