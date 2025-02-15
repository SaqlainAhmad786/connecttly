import Icon1 from "../../../../assets/images/v3/icon1.svg";
import Icon2 from "../../../../assets/images/v3/icon2.svg";
import Icon3 from "../../../../assets/images/v3/icon3.svg";
import Icon4 from "../../../../assets/images/v3/icon4.svg";
import Icon5 from "../../../../assets/images/v3/icon5.svg";
import FadeInStagger from "../../../animation/FadeInStagger";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Optimize Your LinkedIn Presence",
		description:
			"Turn your profile or business page into a powerful marketing asset.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Scale with Data-Driven LinkedIn Ads",
		description:
			"Reach your ideal audience with precision targeting.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Convert Connections into Clients",
		description:
			"Build meaningful relationships that drive business growth.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon4,
		title: "Establish Authority",
		description: "Become a recognized thought leader in your industry",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon5,
		title: "Attract High-Value Leads",
		description:
			"Engage decision-makers and generate inbound opportunities.",
	},
];

function Features() {
	return (
		<section className="sofax-section-padding bg-light">
			<div className="container">
				<div className="sofax-section-title center max-width-medium">
					<div className="tg-heading-subheading animation-style3">
						<h2>
							<TextSplitFadeIn> At Connecttly, we craft custom LinkedIn strategies to help you: </TextSplitFadeIn>
						</h2>
					</div>
				</div>
				<div className="row">
					{featuresData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-xl-4 col-md-6">
							<FeatureCard feature={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
