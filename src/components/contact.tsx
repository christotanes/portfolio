import { Container, Row, Col } from "react-bootstrap"
import ContactButton from "./contactButton"

export default function Contact() {
	return (
		<section id="contact" className="bg-white">
			<Container className="vh-100">
				<Row>
					<Col className="text-dark mt-3 d-flex flex-column">
						<h1>"This is Contact"</h1>
						<ContactButton/>
					</Col>
				</Row>
			</Container>
		</section>
	)
};