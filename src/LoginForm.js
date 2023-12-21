import "./App.css";
import { Button, Form } from "react-bootstrap";
import loginstyle from "./style/loginform.module.css";
import Loginheader from "./component/Loginheader";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
function LoginForm() {
	const [user, setUser] = useState([
		{ username: "aslam", password: "aslam123" },
		{ username: "anwar", password: "anwar123" },
	]);
	const [currentInput, setCurrentInput] = useState({
		username: "",
		password: "",
	});
	const [togAction, setTogAction] = useState(true);
	const tog2 = () => {
		setTogAction(!togAction);
	};
	const checkUser = () => {
		// console.log("Button is working......");

		if (currentInput.username === "" || currentInput.password === "") {
			return window.alert("Please enter the user and password first....");
		}

		const findUser = user.find((element) => {
			return (
				element.username === currentInput.username &&
				element.password === currentInput.password
			);
		});
		if (findUser) {
			alert("user found......");
			setCurrentInput({ username: "", password: "" });
		} else {
			alert("user not found...");
			setCurrentInput({ username: "", password: "" });
		}
	};

	return (
		<>
			<div>
				<body>
					<Loginheader />
					<Form className={loginstyle.login_body}>
						<div style={{ paddingRight: 70 }}>
							<label>
								{" "}
								<h5>Username</h5>
							</label>
							<input
								type="Text"
								value={setCurrentInput.username}
								onChange={(e) => {
									setCurrentInput({
										...currentInput,
										username: e.target.value,
									});
								}}
							/>
						</div>
						<br />
						<div>
							<label>
								{" "}
								<h5>Password</h5>
							</label>
							<input
								type={togAction ? "password" : "text"}
								value={setCurrentInput.password}
								onChange={(e) => {
									setCurrentInput({
										...currentInput,
										password: e.target.value,
									});
								}}
							/>
							<Button
								style={{ marginLeft: 20 }}
								variant="dark"
								onClick={() => {
									tog2();
								}}
							>
								{togAction === true ? (
									<FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
								) : (
									<FontAwesomeIcon icon={faEyeSlash}></FontAwesomeIcon>
								)}
							</Button>
						</div>
						<br />
						<Button
							onClick={() => {
								checkUser();
							}}
						>
							Login
						</Button>
						<br />
						<br />
						{/* <h1>{JSON.stringify(user)}</h1> */}
					</Form>
				</body>
			</div>
		</>
	);
}

export default LoginForm;
