import Navbar from "../common/navbar";
export default function LandingPage() {
	return (
		<>
			<Navbar displayLogout={false} />
			<div className="btns">
				<a href="/login" style={{ textDecoration: "none" }}>
					<button className="login-btn">Login</button>
				</a>
				<a href="/sign-up" style={{ textDecoration: "none" }}>
					<button className="sign-up">Create an Account</button>
				</a>
			</div>
			<strong>
				Note: Even though this site has encryption, please do not use your real
				password when signing up.
			</strong>
		</>
	);
}