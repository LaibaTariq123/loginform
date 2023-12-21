import logo2 from "../image/logo.png";
import { Navbar } from "react-bootstrap";
import header from "../style/header.module.css";
function Loginheader() {
	return (
		<>
			<div>
				<nav className={header.header_body}>
					<ul>
						<li>
							<img
								src={logo2}
								style={{ paddingLeft: 0, paddingTop: 10 }}
								width={50}
								height={50}
								alt="loginlogo"
							/>
						</li>
						<li>
							{" "}
							<h1>
								<span style={{ paddingLeft: 20, fontSize: 30 }}>
									SHIFT Solution & Training Institute
								</span>
							</h1>
						</li>
					</ul>
				</nav>
				{/* <Navbar>
					<img src={logo2} alt="loginlogo" />

					<h1>
						<span>SHIFT Solution By Institute Traner</span>
					</h1>
					 <h2>Application By Student Laiba</h2> 
				</Navbar> */}
			</div>
		</>
	);
}
export default Loginheader;
