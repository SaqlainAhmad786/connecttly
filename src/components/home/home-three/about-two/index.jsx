import Icon from "../../../../assets/images/v3/Icon5.png";
import Thumb2Img from "../../../../assets/images/v3/thumb2.png";
import FadeInLeft from "../../../animation/FadeInLeft";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function AboutTwo() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInLeft className="sofax-content-thumb mr-80 box-shadow">
							<img src={Thumb2Img} alt="Thumb2Img" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>
									<TextSplitFadeIn> Who We Help </TextSplitFadeIn>{" "}
								</h2>
							</div>
							<p>
								We empower businesses, startups, and entrepreneurs with innovative digital solutions, helping them grow and succeed online.
							</p>
							<div className="sofax-list-icon-wrap">
								<div className="sofax-list-icon-icon">
									<ul>
										<li>
											<img src={Icon} alt="Icon" />
											CXOs & Founders
										</li>
										<li>
											<img src={Icon} alt="Icon" />
											Sales & Marketing Teams
										</li>
									</ul>
								</div>
								<div className="sofax-list-icon-icon">
									<ul>
										<li>
											<img src={Icon} alt="Icon" />
											B2B Businesses & Startups
										</li>
										<li>
											<img src={Icon} alt="Icon" />
											Job Seekers & Professionals
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutTwo;
