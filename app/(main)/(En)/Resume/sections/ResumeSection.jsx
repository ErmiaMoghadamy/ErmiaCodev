export default function ResumeSection({ pk, title, children }) {
    return (
        <section id={pk} className="my-4 card bg-base-100 dark:bg-gray-700 shadow-sm shrink-0 border-2 border-primary dark:border-gray-500 border-dashed">
            <h2 className="pt-3 lg:pt-5 text-center text-primary dark:text-violet-200 font-bold text-2xl lg:text-3xl">
                {title}
            </h2>
            {children}
        </section>
    )
}