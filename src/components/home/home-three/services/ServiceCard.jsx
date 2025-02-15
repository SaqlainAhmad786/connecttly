import FadeInStagger from "../../../animation/FadeInStagger";

function ServiceCard({ service: { title, description, icon, points } }) {
	return (
		<div className="sofax-service-iconbox-wrap">
			<div className="sofax-service-iconbox-data">
				<h4>{title}</h4>
				<p>{description}</p>
				{/* {points.map((point, index) => (
					<FadeInStagger key={index} index={index} className="col-lg-6">
						<p className="points">{point}</p>
					</FadeInStagger>
				))} */}
			</div>
			<div className="sofax-service-iconbox-icon">
				<img src={icon} alt="icon" />
			</div>
		</div>
	);
}

export default ServiceCard;
