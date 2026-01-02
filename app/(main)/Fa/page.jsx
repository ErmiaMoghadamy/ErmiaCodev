import HeroBanner from "@/components/hero/banner";
import HeroMiniPost from "@/components/hero/miniPost";

export default function MainPage() {
    return (
        <>
            <section className="max-w-6xl container mx-auto px-4 py-6">
                <HeroBanner badge="شخصی" title="ارمیا مقدمی (Ermia Codev)" linkTxt="مشاهده رزومه من و جزعیات بیشتر" caption="ارمیا مقدمی هستم برنامه نویس. توسعه دهنده و مهندس نرم افزار. دیتاساینتیست. مدرس رسمی فنی حرفه ای" />
                <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <HeroMiniPost link="/Fa/Courses" linkTxt="مشاهده دوره ها" thumbnail="/assets/Courses.png" title="دوره های آموزشی جدید در وبسایت منتشر میشود" />
                    <HeroMiniPost link="https://github.com/ErmiaMoghadamy/Focusizer/releases/tag/v1.1-dev" linkTxt="دانلود فایل" thumbnail="/assets/fc.png" title="تمرکزیار بومی سازی فارسی برنامه فارست" />
                </div>
            </section>
        </>
    )
}