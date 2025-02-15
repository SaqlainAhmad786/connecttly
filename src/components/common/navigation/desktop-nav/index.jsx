import DesktopNav from "./DesktopNav";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import NavItem from "./NavItem";
function DesktopMenu() {
	return (
		<DesktopNav>
			{/* <NavItem dropdown title="Demos">
				<Dropdown>
					<DropdownItem dropdown title="MultiPage">
						<Dropdown noShape>
							<DropdownItem url="multi-page/home-one">Sales Management</DropdownItem>
							<DropdownItem url="multi-page/home-two">Cripto App</DropdownItem>
							<DropdownItem url="multi-page/home-three">Team Management</DropdownItem>
							<DropdownItem url="multi-page/home-four">Social Agency</DropdownItem>
							<DropdownItem url="multi-page/home-five">Digital Agency</DropdownItem>
							<DropdownItem url="multi-page/home-six">CRM</DropdownItem>
							<DropdownItem url="multi-page/home-seven">AI SasS</DropdownItem>
							<DropdownItem url="multi-page/home-eight">IT Services</DropdownItem>
							<DropdownItem url="multi-page/home-nine">Email Marketing</DropdownItem>
							<DropdownItem url="multi-page/home-ten">Web Hosting</DropdownItem>
						</Dropdown>
					</DropdownItem>
					<DropdownItem dropdown title="OnePage">
						<Dropdown noShape>
							<DropdownItem url="one-page/home-one">Sales Management</DropdownItem>
							<DropdownItem url="one-page/home-two">Cripto App</DropdownItem>
							<DropdownItem url="one-page/home-three">Team Management</DropdownItem>
							<DropdownItem url="one-page/home-four">Social Agency</DropdownItem>
							<DropdownItem url="one-page/home-five">Digital Agency</DropdownItem>
							<DropdownItem url="one-page/home-six">CRM</DropdownItem>
							<DropdownItem url="one-page/home-seven">AI SasS</DropdownItem>
							<DropdownItem url="one-page/home-eight">IT Services</DropdownItem>
							<DropdownItem url="one-page/home-nine">Email Marketing</DropdownItem>
							<DropdownItem url="one-page/home-ten">Web Hosting</DropdownItem>
						</Dropdown>
					</DropdownItem>
				</Dropdown>
			</NavItem> */}
			<NavItem url="/">Home</NavItem>
			<NavItem url="/">Services</NavItem>
			<NavItem url="/">About Us</NavItem>
			<NavItem url="/">Refer & Earn</NavItem>
			<NavItem url="/">Contact Us</NavItem>
		</DesktopNav>
	);
}

export default DesktopMenu;
