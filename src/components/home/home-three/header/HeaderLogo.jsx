import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/logo/logo-dark.svg";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			<Link to="/">
				{/* <img src={Logo} alt="Logo" className="light-version-logo" /> */}
				<p className="fw-bolder text-black fs-3">Connecttly</p>
			</Link>
		</div>
	);
}

export default HeaderLogo;
