import { Col, Container, Row, Image, Button } from "react-bootstrap";
import projects from "../data/projects";

export default function Projects() {

	const projectsTable = projects.map((project) => (
		<Row key={project.id}>
			<Col xs={5}>
				<h4 className="pt-3">{project.title}</h4>
				<p className="mt-3 pe-3">{project.description}</p>
				<Button href={project.link} target="_blank">{ project.linkMsg }</Button>
			</Col>
			<Col xs={5} className="d-flex flex-column align-items-center">
				<div className={`${'slideShow' + project.id}`}>
					<Image src={project.image1} className="w-100" alt={project.alt} />
				</div>
				<div className={`${'slideShow' + project.id}`}>
					<Image src={project.image2} className="w-100" alt={project.alt} />
				</div>
				<div className={`${'slideShow' + project.id}`}>
					<Image src={project.image3} className="w-100" alt={project.alt} />
				</div>
			</Col>
			<Col xs={1}>
				<div>
					<Image src={project.image1} className="w-100" alt={project.alt} />
				</div>
				<div>
					<Image src={project.image2} className="w-100" alt={project.alt} />
				</div>
				<div>
					<Image src={project.image3} className="w-100" alt={project.alt}
					/>
				</div>
			</Col>
		</Row>
	));

	return (
		<Container>
			<h2 className="pt-3">Projects</h2>
			{ projectsTable }
		</Container>
	)
}