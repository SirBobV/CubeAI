import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar.jsx";
import TimerPage from "./pages/TimerPage.jsx";
import AlgorithmsPage from "./pages/AlgorithmsPage.jsx";
import SessionsPage from "./pages/SessionsPage.jsx";
import StatsPage from "./pages/StatsPage.jsx";
import TrainerPage from "./pages/TrainerPage.jsx";

function App() {
	return (
		<div className="app-shell">
			<Sidebar />

			<Routes>
				<Route path="/" element={<TimerPage />} />
				<Route path="/timer" element={<TimerPage />} />
				<Route path="/sessions" element={<SessionsPage />} />
				<Route path="/stats" element={<StatsPage />} />
				<Route path="/algorithms" element={<AlgorithmsPage />} />
				<Route path="/trainer" element={<TrainerPage />} />
			</Routes>
		</div>
	);
}

export default App;
