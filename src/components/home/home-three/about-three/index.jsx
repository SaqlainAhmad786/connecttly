import { Link } from "react-router-dom";
import Thumb from "../../../../assets/images/v3/thumb3.png";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function AboutThree() {
	return (
		<section className="sofax-section-padding3">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-lg-2">
						<FadeInRight className="sofax-content-img ml-70 box-shadow">
							<img src={Thumb} alt="Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>Why Connecttly?</h2>
							</div>
							<p>
								The online landscape is crowded, and decision-makers are more challenging to reach. Traditional marketing methods are expensive and ineffective.
							</p>
						</div>
						<FadeInUp className="sofax-title-btn extra-mt">
							<Link className="sofax-default-btn pill" data-text="Learn More" to="/">
								<span className="button-wraper">Learn More</span>
							</Link>
						</FadeInUp>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutThree;
