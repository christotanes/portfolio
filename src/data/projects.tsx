import ptgame1 from "../images/pt-game-1.png";
import ptgame2 from "../images/pt-game-2.png";
import ptgame3 from "../images/pt-game-3.png";
import postgresql1 from "../images/postgresql-api-2.png";
import postgresql2 from "../images/postgresql-api-4.png";
import postgresql3 from "../images/postgresql-api-5.png";

const projects = [
	{
		"id": 1,
		"title": "Current Project",
		"description": "Designing a JavaScript multiplayer game that will test Physical Therapist students of their knowledge on certain subjects.",
		"link": "https://github.com/christotanes/pt-game",
		"linkMsg": "View project on GitHub",
		"image1": ptgame1,
		"image2": ptgame2,
		"image3": ptgame3,
		"alt": "Current node project game",
		"cssClass": "slideShow1",
	},
	{
		"id": 2,
		"title": "PostgreSQL NodeJS API",
		"description": "Developed a RESTful API using Node.js, PostgreSQL database, using a node PostgreSQL framework that implemented CRUD operations, JWT authorization and Bcrypt encryption and exercised object relational management with Mocha and chai to do unit testing.",
		"link": "https://github.com/christotanes/learning-postgresql-api",
		"linkMsg": "View project on GitHub",
		"image1": postgresql1,
		"image2": postgresql2,
		"image3": postgresql3,
		"alt": "PostgreSQL api images",
		"cssClass": "slideShow2",
	}
]
export default projects;