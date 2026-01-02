import ResumeSection from "./ResumeSection";

export default function EduSection() {
    return (
        <ResumeSection pk="education" title="Education">
            <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                <img className="w-20 h-20 rounded-full !aspect-square object-cover border-2" src="/assets/logos/sharif.png" alt="Ermia Moghadamy" />
                <div className="grow">
                    <p className="text-xl lg:text-xl font-bold">Sharif University of Technology</p>
                    <p className="lg:text-lg">
                        BS of Applied Mathematics
                    </p>
                </div>
            </div>
            <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                <img className="w-20 h-20 rounded-full !aspect-square object-cover border-2 bg-white" src="/assets/logos/sampad.png" alt="Ermia Moghadamy" />
                <div className="grow">
                    <p className="text-xl lg:text-xl font-bold">Darolfonoon school</p>
                    <p className="lg:text-lg">
                        Diploma of Mathematics
                    </p>
                </div>
            </div>
        </ResumeSection>
    )
}