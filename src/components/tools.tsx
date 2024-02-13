import { Container, Image } from "react-bootstrap";
import { logos } from "../data/tools";

export default function Tools() {
	
	const logosDisplay = logos.map((logo) => (
		<Image src={logo} className="logos"/>
	))

	const logos2Display = logos.map((logo) => (
		<Image src={logo} className="logos" />
	))

	return (
		<section id="tools">
			<Container className="my-4 py-4">
				<div className="logos">
					<div className="logos-slide">
						{logosDisplay}
					</div>
					<div className="logos-slide">
					{ logos2Display }
					</div>
				</div>
			</Container>
		</section>
	)
}