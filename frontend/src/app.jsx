import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar.jsx";
import TimerPage from "./pages/TimerPage.jsx";
import AlgorithmsPage from "./pages/AlgorithmsPage.jsx";
import SessionsPage from "./pages/SessionsPage.jsx";
import StatsPage from "./pages/StatsPage.jsx";
import TrainerPage from "./pages/TrainerPage.jsx";

function App() {
	const [solves, setSolves] = useState([]);

	return (
		<div className="app-shell">
			<Sidebar />

			<Routes>
				<Route path="/" element={<Navigate to="/timer" replace />} />
				<Route
					path="/timer"
					element={<TimerPage solves={solves} setSolves={setSolves} />}
				/>
				<Route path="/sessions" element={<SessionsPage />} />
				<Route path="/stats" element={<StatsPage solves={solves} />} />
				<Route path="/algorithms" element={<AlgorithmsPage />} />
				<Route path="/trainer" element={<TrainerPage />} />
			</Routes>
		</div>
	);
}

export default App;
