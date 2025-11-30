
export default function ResumeLayout({ children }) {
    return (
        <div className="container mx-auto px-2 lg:px-6 py-6 flex flex-col lg:flex-row gap-4">
            {children}
        </div>
    )
}