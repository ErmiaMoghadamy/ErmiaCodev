import ResumeSection from "./ResumeSection";

export default function BioSection() {
    return (
        <ResumeSection pk="bio" title="Biography">
            <div className="px-6 pb-6 flex flex-col sm:flex-row gap-6 items-center">
                <div>
                    <img className="pt-3 sm:pt-0 max-w-32 aspect-square h-auto rounded-full object-cover" src="/assets/Ermia-Moghadamy.png" alt="Ermia Moghadamy" />
                </div>
                <div className="grow">
                    <h1 className="py-4 text-xl lg:text-2xl font-bold">Ermia Moghadamy</h1>
                    <p className="lg:text-xl">
                        I'm Ermia Moghadamy (Ermia Codev), Software Engineer, DataScientist & SysAdmin. Official TVET Instructor. <br />
                        I don't just code I build systems with architechture mindset. <br />
                    
                        <strong className="text-rose-500 text-xs">
                            Learning never ends
                        </strong>
                    </p>
                </div>
            </div>
        </ResumeSection>
    )
}

