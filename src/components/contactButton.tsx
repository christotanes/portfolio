import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface IMessage {
	email: string,
	subject: string,
	message: string,
}

export default function ContactButton() {
	const [show, setShow] = useState(false);
	const handleClose = () => {
		setMessageDetails({
			'email': '',
			'subject': '',
			'message': '',
		})
		setShow(false)
	};
	const handleShow = () => setShow(true);

	const [messageDetails, setMessageDetails] = useState<IMessage>({
		email: '',
		subject: '',
		message: ''
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setMessageDetails(prevState => ({
			...prevState,
			[name]: value,
		}));
		console.log(messageDetails)
	}

	return (
		<>
			<Button className="w-50 mx-auto" onClick={handleShow}>Contact me</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}>
				<Modal.Header closeButton className="text-dark">
					Please enter your details:
				</Modal.Header>
				<Modal.Body>
						<Form.Group controlId="email">
							<Form.Label className="text-dark">Email:</Form.Label>
							<Form.Control
							required
							name="email"
							placeholder="Enter your Email here"
							type="text"
							onChange={handleChange}
							/>
					</Form.Group>
					<Form.Group controlId="subject">
							<Form.Label className="text-dark">Subject:</Form.Label>
							<Form.Control
								name="subject"
								required
								placeholder="Enter the Subject here"
								type="text"
								onChange={handleChange}
								/>
					</Form.Group>
					<Form.Group controlId="message">
							<Form.Label className="text-dark">Message:</Form.Label>
							<Form.Control
								name="message"
								required
								placeholder="Enter the Message here"
								as="textarea"
								rows={5}
								onChange={handleChange}
								/>
						</Form.Group>
				</Modal.Body>
				<Modal.Footer className="text-dark">
					<Button variant="success">Submit</Button>
					<Button variant="danger" onClick={handleClose}>Cancel</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}