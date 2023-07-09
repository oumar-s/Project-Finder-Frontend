import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from '../context/authContext';
import PrivateRouteRequiresAuth from '../common/PrivateRouteRequiresAuth';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import PostPage from '../pages/PostPage';
import ProjectPage from '../pages/ProjectPage';



function App() {
  return (
    <AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/sign-up" element={<SignUpPage />} />
					<Route path="/home" element={<HomePage />} />
					{/* <Route path="/about-us" element={<AboutUsPage />} /> */}
					<Route
						path="/post"
						element={
							<PrivateRouteRequiresAuth>
								<PostPage />
							</PrivateRouteRequiresAuth>
						}
					/>
					{/* <Route
						path="/request"
						element={
							<PrivateRouteRequiresAuth>
								<RequestsPage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route
						path="/my-account"
						element={
							<PrivateRouteRequiresAuth>
								<MyAccountPage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route
						path="/profile"
						element={
							<PrivateRouteRequiresAuth>
								<ProfilePage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route
						path="/edit-profile"
						element={
							<PrivateRouteRequiresAuth>
								<EditProfilePage />
							</PrivateRouteRequiresAuth>
						}
					/>
					<Route
						path="/settings"
						element={
							<PrivateRouteRequiresAuth>
								<SettingsPage />
							</PrivateRouteRequiresAuth>
						}
					/> */}
					<Route path="/logout" element={<LandingPage />} />
					<Route
						path="/projects/:projectId"
						element={
							<PrivateRouteRequiresAuth>
								{" "}
								<ProjectPage />{" "}
							</PrivateRouteRequiresAuth>
						}
					/>
				</Routes>
			</Router>
		</AuthProvider>
    
  
  );
}

export default App;
