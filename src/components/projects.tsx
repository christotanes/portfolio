import { Col, Container, Row, Image, Button } from "react-bootstrap";
import projects from "../data/projects";
import currentSlide from "../util/imageSlideShow";

export default function Projects() {

	const projectsTable = projects.map((project) => (
		<Row key={project.id} className="mb-4 vh-100 d-flex flex-row align-items-center">
			<Col xs={6}>
				<h4 className="pt-3">{project.title}</h4>
				<p className="mt-3 pe-3">{project.description}</p>
				<Button href={project.link} target="_blank">{ project.linkMsg }</Button>
			</Col>
			<Col xs={6} className="bg-black rounded border border-secondary">
				<Row className="d-flex flex-column align-items-center">
					<Col className="d-flex flex-row my-3 align-items-center justify-content-center">
						<div className="text-center">
							<Image src={project.image1} className="w-25 mx-3" alt={project.alt} onClick={() => currentSlide(1, project.cssClass)}/>
							<Image src={project.image2} className="w-25 mx-3" alt={project.alt} onClick={() => currentSlide(2, project.cssClass)}/>
							<Image src={project.image3} className="w-25 mx-3" alt={project.alt} onClick={() => currentSlide(3, project.cssClass)}/>
						</div>
					</Col>
					<Col className="mb-3">
						<div className={`mainProjectImage ${project.cssClass}`}>
							<Image src={project.image1} className="w-100" alt={project.alt} />
						</div>
						<div className={project.cssClass}>
							<Image src={project.image2} className="w-100" alt={project.alt} />
						</div>
						<div className={project.cssClass}>
							<Image src={project.image3} className="w-100" alt={project.alt} />
						</div>
					</Col>
				</Row>
			</Col>
		</Row>
	));

	return (
		<section id="projects">
			<Container>
				<h2 className="pt-3 text-center">Projects</h2>
				{projectsTable}
			</Container>
		</section>
	)
}