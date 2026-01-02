import ResumeSection from "./ResumeSection";

export default function RewardsSection() {
    return (
        <ResumeSection pk="rewards" title="Rewards">
            <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                <div className="grow">
                    <p className="text-xl lg:text-xl font-bold">WorldSkills Iran</p>
                    <p className="lg:text-lg">
                        Medallion of Exellence in Web Technologies.
                    </p>
                </div>
            </div>
            <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                <div className="grow">
                    <p className="text-xl lg:text-xl font-bold">Kharazmi Junior Festival</p>
                    <p className="lg:text-lg">
                        1st (country), Kharazmi festival Mathematics major submajor of hardware controllers using Arduino & Adafruit.
                    </p>
                </div>
            </div>
            <div className="px-6 pb-6 flex flex-row gap-6 items-center">
                <div className="grow">
                    <p className="text-xl lg:text-xl font-bold">Pazhoheshsara</p>
                    <p className="lg:text-lg">
                        2nd (Country), Pazhoheshsara Coding Festival submodule of Intractive web design.
                    </p>
                </div>
            </div>
        </ResumeSection>
    )
}