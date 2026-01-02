import ResumeSection from "./ResumeSection";

export default function SkillsSection() {
    return (
        <ResumeSection pk="skills" title="Skills">
            <div className="px-6 pb-6 grid grid-cols-2 lg:grid-cols-4 pt-4 gap-4 font-bold">
                <div>System Designs</div>
                <div>Design Patterns</div>
                <div>Project Management</div>
                <div>Team Work</div>
                
                <div>Python</div>
                <div>Numpy, Pandas</div>
                <div>SciKitLearn</div>
                <div>Data Analysis</div>

                <div className="text-cyan-600">Go</div>
                <div>C++</div>
                <div>React Native</div>
                <div>Dart, Flutter</div>

                <div>Html, Css, Js</div>
                <div>Tailwind, Alpine, BS5</div>
                <div>React, NextJs, Redux</div>
                <div>VueJs, NuxtJs, ComAPI</div>

                <div>Flask +SqlAlchemy</div>
                <div className="text-green-700">Django, DRF</div>
                <div>Php, Laravel</div>
                <div>NestJs,GraphQL</div>

                <div>Postgres, Mongo, Redis</div>
                <div>Docker, Git, CI/CD</div>
                <div>Linux (LPIC-1&2)</div>
                <div>Automation with ShellScript</div>

            </div>
        </ResumeSection>
    )
}