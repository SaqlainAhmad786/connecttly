import { Link } from "react-router-dom";
import Profile from "../../../../assets/images/v3/profile.svg";
import Business from "../../../../assets/images/v3/business.svg";
import Advertise from "../../../../assets/images/v3/advertise.svg";
import Branding from "../../../../assets/images/v3/branding.svg";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
import ServiceCard from "./ServiceCard";
const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "LinkedIn Profile Optimization",
		description:
			"This is for CXOs, job seekers, and professionals who want to build a powerful personal brand.",
		icon: Profile,
		points: ["Craft a standout profile that attracts opportunities", "Position yourself as a thought leader", "Increase visibility and credibility"],
	},
	{
		id: crypto.randomUUID(),
		title: "LinkedIn Business Page Optimization",
		description:
			"This is for brands looking to enhance engagement and authority.",
		icon: Business,
		points: ["Optimize your page for better reach", "Develop a compelling content strategy", "Attract the right audience and followers"],
	},
	{
		id: crypto.randomUUID(),
		title: "LinkedIn Paid Advertising",
		description:
			"For businesses seeking qualified leads & sales with high-ROI campaigns.",
		icon: Advertise,
		points: ["Precision targeting for B2B success", "AI-driven ad creatives that convert", "Scalable lead generation with optimized budgets"],
	},
	{
		id: crypto.randomUUID(),
		title: "Ghostwriting & Personal Branding",
		description:
			"This is for CXOs and executives who want to build influence through content.",
		icon: Branding,
		points: ["Thought leadership posts & articles", "Content strategy aligned with your goals", "Increase engagement and credibility"],
	},
];
function Services() {
	return (
		<section className="sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title">
					<div className="row">
						<div className="col-xl-6 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>
									<TextSplitFadeIn> Our Services </TextSplitFadeIn>
								</h2>
							</div>
						</div>
						<div className="col-xl-6 col-lg-4 d-flex align-items-center justify-content-end">
							<FadeInUp className="sofax-title-btn">
								<Link className="sofax-default-btn pill" data-text=" View all services " to="/service">
									<span className="button-wraper"> View all services </span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
				<div className="row">
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
