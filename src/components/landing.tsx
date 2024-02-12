import { Col, Container, Row } from "react-bootstrap";

export default function Landing() {

	const title: string = "Christopher Totanes";
	const subtitle: string = "Full Stack Developer";

	return (
		<section className="bg-dark">
			<Container id="landing" fluid className="vh-100"></Container>
			<Container className="landing-text">
				<Row>
					<Col className="text-center">
						<h1>{ title }</h1>
						<div className="border-top"></div>
						<h3>{ subtitle }</h3>
					</Col>
				</Row>
			</Container>
		</section>
	)
}