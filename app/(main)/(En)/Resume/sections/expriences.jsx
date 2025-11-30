import ResumeSection from "./ResumeSection";

export default function ExpSection() {
    return (
        <ResumeSection pk="expriences" title="Expereinces">
            <div className="px-4 pb-4 flex flex-col gap-6">
                <div>
                    <p className="text-xl lg:text-xl font-bold">TVET Instructor</p>
                    <p className="lg:text-lg">
                        Certified as official instructor of Iran TVTO(TVET).
                    </p>
                    <div className="flex gap-2 text-primary text-xs sm:text-sm">
                        <strong>Python</strong>
                        <strong>Web Devlopment</strong>
                        <strong>Data Science</strong>
                        <strong>Linux</strong>

                    </div>
                </div>

                <div>
                    <p className="text-xl lg:text-xl font-bold">Konkur Ac Webapp</p>
                    <p className="lg:text-lg">
                        an automated LMS built for tracking students study & monitor their studying.
                    </p>
                    <div className="flex gap-2 text-primary text-xs sm:text-sm">
                        <strong>Next.Js</strong>
                        <strong>React</strong>
                        <strong>Django</strong>
                        <strong>Sass</strong>

                    </div>
                </div>
                <div>
                    <p className="text-xl lg:text-xl font-bold">Nabla Ac Webapp</p>
                    <p className="lg:text-lg">
                        automated <strong>school</strong> & study tracking system based on schools. plus <strong>online exam</strong>
                    </p>
                    <div className="flex gap-2 text-primary text-xs sm:text-sm">
                        <strong>Laravel</strong>
                        <strong>TailwindCss</strong>
                        <strong>AlpineJs</strong>
                    </div>
                </div>
                <div>
                    <p className="text-xl lg:text-xl font-bold">Gravity Ac Webapp</p>
                    <p className="lg:text-lg">
                        Online tutorial courses platform
                    </p>
                    <div className="flex gap-2 text-primary text-xs sm:text-sm">
                        <strong>Django</strong>
                        <strong>NuxtJs</strong>
                        <strong>TailwindCss</strong>
                    </div>
                </div>

                <div>
                    <p className="text-xl lg:text-xl font-bold">Focusizer (FOSS)</p>
                    <p className="lg:text-lg">
                        A free & open-source localization of Forest focus application.
                    </p>
                    <div className="flex gap-2 text-primary text-xs sm:text-sm">
                        <strong>Flutter</strong>
                        <strong>Riverpod</strong>
                        <strong>HiveDb</strong>
                    </div>
                </div>

                <div>
                    <p className="text-xl lg:text-xl font-bold">Project Mentor</p>
                    <p className="lg:text-lg">
                        Projects Mentor of darolfonoon school. leaded over 10 state rank.
                    </p>
                    <div className="flex gap-2 text-primary text-xs sm:text-sm">
                        <strong>Flutter</strong>
                        <strong>NextJs</strong>
                        <strong>Flask</strong>
                        <strong>Arduino</strong>
                    </div>
                </div>
            </div>
        </ResumeSection>
    )
}