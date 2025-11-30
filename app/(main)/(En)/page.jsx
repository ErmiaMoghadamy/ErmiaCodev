import HeroBanner from "@/components/hero/banner";
import HeroMiniPost from "@/components/hero/miniPost";

export default function MainPage() {
    return (
        <>
            <section className="max-w-6xl container mx-auto px-2 py-6">
                <HeroBanner badge="Personal" title="Ermia Codev (Ermia Moghadamy)" linkTxt="Read more details about My Resume" caption="I'm Ermia Moghadamy, Programmer, Fullstack Developer, SysAdmin, DevOps, Official TVET Instructor" />
                <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <HeroMiniPost link="/Courses" linkTxt="See Courses" thumbnail="/assets/Courses.png" title="Courses: Web Development, DevOps, DataScience Tutorial" />
                    <HeroMiniPost link="https://github.com/ErmiaMoghadamy/Focusizer/releases/tag/v1.1-dev" linkTxt="Download APK" thumbnail="/assets/fc.png" title="Focusizer: Persian Localization of Forest App" />
                </div>
            </section>
        </>
    )
}