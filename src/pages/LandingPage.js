import Navbar from "../common/navbar";
import Footer from "../common/footer";
export default function LandingPage() {
	return (
		<div>
			<Navbar displayLogout={false} />
			<div className="container text-center" >
				<h1 className="mx-auto p-2 my-5 w-50" >
					Build Together With Project Finder
				</h1>
				<h6 className="mx-auto p-2 my-5">
					The goal of Project Finder is to promote team work and colaboration among software developers. With Project Finder, you can find cool projects to work on and awesome teammates to work with.
				</h6>
				<div class="container text-center w-75">
					<div class="row row-cols-2">
						<div class="col">
							<h6 className="text-bg-light mx-auto p-2 my-5 w-75">
								Find Project Ideas
							</h6>
							<img className="img-fluid" src={require("../common/image_1.png")} alt=""></img>
						</div>
						<div class="col">
							<h6 className="text-bg-light mx-auto p-2 my-5 w-75">
								Improve Your Skills
							</h6>
							<img className="img-fluid" src={require("../common/image_4.png")} alt=""></img>
						</div>
						<div class="col">
							<h6 className="text-bg-light mx-auto p-2 my-5 w-75">
								Upgrade your resume
							</h6>
							<img className="img-fluid" src={require("../common/image_2.png")} alt=""></img>
						</div>
						<div class="col">
							<h6 className="text-bg-light mx-auto p-2 my-5 w-75">
								Meet New People
							</h6>
							<img className="img-fluid" src={require("../common/image_3.png")} alt=""></img>
						</div>
					</div>
				</div>
				<h3 className="mx-auto p-2 my-5 w-50" >
					Get Started Now!
				</h3>
				<div className="btns mx-auto p-2 my-5 w-50">
					<a href="/login" style={{ textDecoration: "none" }}>
						<button className="btn btn-primary mx-2 my-2 ">Login</button>
					</a>
					<a href="/sign-up" style={{ textDecoration: "none" }}>
						<button className="btn btn-primary mx-2 my-2">Create an Account</button>
					</a>
				</div>
			</div>
			<Footer />
		</div>
	);
}