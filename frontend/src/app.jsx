import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar.jsx";
import TimerPage from "./pages/TimerPage.jsx";
import AlgorithmsPage from "./pages/AlgorithmsPage.jsx";
import SessionsPage from "./pages/SessionsPage.jsx";
import StatsPage from "./pages/StatsPage.jsx";
import TrainerPage from "./pages/TrainerPage.jsx";

const Server = "https://cubeai-k2fg.onrender.com/solves";
const LocalServer = "http://localhost:8000/solves";

function App() {
	const [solves, setSolves] = useState([]);

	async function addSolve(newSolve) {
		console.log("addSolve called", newSolve);
		await fetch(Server, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newSolve),
		});

		// refresh solves from backend
		const res = await fetch(Server);
		const data = await res.json();
		setSolves(data);
	}

	async function sendMessage(userInput) {
		const response = await fetch("https://cubeai-k2fg.onrender.com/trainer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				message: userInput,
				user_id: 1,
			}),
		});
		const data = await response.json();
		console.log(data.answer);
		return data;
	}

	useEffect(() => {
		fetch(Server)
			.then((res) => res.json())
			.then((data) => setSolves(data));
	}, []);

	return (
		<div className="app-shell">
			<Sidebar />

			<Routes>
				<Route path="/" element={<Navigate to="/timer" replace />} />
				<Route
					path="/timer"
					element={
						<TimerPage
							solves={solves}
							setSolves={setSolves}
							addSolve={addSolve}
						/>
					}
				/>
				<Route path="/sessions" element={<SessionsPage />} />
				<Route path="/stats" element={<StatsPage solves={solves} />} />
				<Route
					path="/algorithms"
					element={<Navigate to="/algorithms/pll" replace />}
				/>
				<Route
					path="/algorithms/oll"
					element={<AlgorithmsPage category="OLL" />}
				/>
				<Route
					path="/algorithms/pll"
					element={<AlgorithmsPage category="PLL" />}
				/>
				<Route
					path="/algorithms/coll"
					element={<AlgorithmsPage category="COLL" />}
				/>
				<Route
					path="/algorithms/cll"
					element={<AlgorithmsPage category="CLL" />}
				/>
				<Route
					path="/trainer"
					element={<TrainerPage sendMessage={sendMessage} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
