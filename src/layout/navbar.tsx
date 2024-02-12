import { Navbar, Container, Nav } from "react-bootstrap"

function Header() {
	return (
		<Navbar expand="lg" data-bs-theme="dark">
			<Container>
				<Navbar.Brand href="#home">Chris Totanes</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header;