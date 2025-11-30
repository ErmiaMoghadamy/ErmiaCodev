import ResumeSection from "./ResumeSection";

export default function RewardsSection() {
    return (
        <ResumeSection pk="rewards" title="Rewards">
            <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                <div className="grow">
                    <p className="text-xl lg:text-xl font-bold">WorldSkills (Web Technologies)</p>
                    <p className="lg:text-lg">
                        1st State rank plus choosen as Top 5 Country web developer for asia camp.
                    </p>
                </div>
            </div>
            <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                <div className="grow">
                    <p className="text-xl lg:text-xl font-bold">1st Country Rank</p>
                    <p className="lg:text-lg">
                        Kharazmi festival Mathematics major submajor of hardware controllers using Arduino & Adafruit. (MathBox)
                    </p>
                </div>
            </div>
            <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                <div className="grow">
                    <p className="text-xl lg:text-xl font-bold">2nd Country Rank</p>
                    <p className="lg:text-lg">
                        2nd Country Rank at Pazhoheshsara Coding Festival submodule of Intractive web design.
                    </p>
                </div>
            </div>
        </ResumeSection>
    )
}