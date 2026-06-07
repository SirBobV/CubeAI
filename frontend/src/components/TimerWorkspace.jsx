import { useState, useEffect } from "react";

function formatTime(milliseconds) {
	return (milliseconds / 1000).toFixed(2);
}

function getAverage(solves) {
	if (solves.length === 0) {
		return null;
	}

	return (
		solves.reduce(
			(sum, solve) =>
				sum + solve.time + (solve.penalty != -1 ? solve.penalty : 0),
			0,
		) / solves.length
	);
}

function getCurrentAverage(solves, size) {
	if (solves.length < size) {
		return null;
	}

	return getAverage(solves.slice(0, size));
}

function getBestAverage(solves, size) {
	if (solves.length < size) {
		return null;
	}

	let bestAverage = null;

	for (let index = 0; index <= solves.length - size; index += 1) {
		const average = getAverage(solves.slice(index, index + size));

		if (bestAverage === null || average < bestAverage) {
			bestAverage = average;
		}
	}

	return bestAverage;
}

function TimerWorkspace({ solves, event, session, setSolves }) {
	const usefulSolves = solves.filter((solve) => {
		return solve.event === event && solve.session === session;
	});

	const API_URL = "https://cubeai-k2fg.onrender.com";

	usefulSolves.reverse();

	const bestSingle =
		usefulSolves.length === 0
			? null
			: usefulSolves.reduce((best, current) =>
					best.time + (best.penalty != -1 ? best.penalty : 0) <
					current.time + (current.penalty != -1 ? current.penalty : 0)
						? best
						: current,
				);
	const currentSingle = usefulSolves[0] ?? null;
	const currentAo5 = getCurrentAverage(usefulSolves, 5);
	const currentAo12 = getCurrentAverage(usefulSolves, 12);
	const bestAo5 = getBestAverage(usefulSolves, 5);
	const bestAo12 = getBestAverage(usefulSolves, 12);
	const [selectedSolve, setSelectedSolve] = useState(null);
	const [menuPosition, setMenuPosition] = useState(null);

	async function handleDelete() {
		await fetch(`${API_URL}/solves/${selectedSolve.id}`, {
			method: "DELETE",
		});

		setSolves((current) =>
			current.filter((solve) => solve.id !== selectedSolve.id),
		);

		setMenuPosition(null);
		setSelectedSolve(null);
	}

	async function handlePlusTwo() {
		await fetch(
			`${API_URL}/solves/${selectedSolve.id}/penalty?penalty=${selectedSolve.penalty == 2000 ? "0" : "2000"}`,
			{
				method: "PATCH",
			},
		);

		setSolves((current) =>
			current.map((solve) =>
				solve.id === selectedSolve.id
					? { ...solve, penalty: selectedSolve.penalty == 2000 ? 0 : 2000 }
					: solve,
			),
		);

		setMenuPosition(null);
		setSelectedSolve(null);
	}

	useEffect(() => {
		function handleClick() {
			setMenuPosition(null);
		}

		window.addEventListener("click", handleClick);

		return () => window.removeEventListener("click", handleClick);
	}, []);
	return (
		<section className="timer-workspace">
			<aside className="stats-column">
				<div className="stats-panel">
					<h3>Best</h3>

					<div className="stat-row">
						<span>Single</span>
						<strong>
							{bestSingle
								? formatTime(
										bestSingle.time +
											(bestSingle.penalty != -1 ? bestSingle.penalty : 0),
									)
								: "--"}
						</strong>
					</div>

					<div className="stat-row">
						<span>Ao5</span>
						<strong>{bestAo5 === null ? "--" : formatTime(bestAo5)}</strong>
					</div>

					<div className="stat-row">
						<span>Ao12</span>
						<strong>{bestAo12 === null ? "--" : formatTime(bestAo12)}</strong>
					</div>
				</div>

				<div className="stats-panel">
					<h3>Current</h3>

					<div className="stat-row">
						<span>Single</span>
						<strong>
							{currentSingle
								? formatTime(
										currentSingle.time +
											(currentSingle.penalty != -1 ? currentSingle.penalty : 0),
									)
								: "--"}
						</strong>
					</div>

					<div className="stat-row">
						<span>Ao5</span>
						<strong>
							{currentAo5 === null ? "--" : formatTime(currentAo5)}
						</strong>
					</div>

					<div className="stat-row">
						<span>Ao12</span>
						<strong>
							{currentAo12 === null ? "--" : formatTime(currentAo12)}
						</strong>
					</div>
				</div>
			</aside>
			<section className="solves-table-panel">
				<header className="panel-header">
					<h3>Solves</h3>
				</header>

				<div className="solves-table-scroll">
					<table className="solves-table">
						<thead>
							<tr>
								<th>#</th>
								<th>Time</th>
								<th>Ao5</th>
								<th>Ao12</th>
								<th>Scramble</th>
							</tr>
						</thead>

						<tbody>
							{usefulSolves.map((solve, index) => {
								const ao5Solves = usefulSolves.slice(index, index + 5);
								const ao5 =
									ao5Solves.length < 5
										? "--"
										: formatTime(getAverage(ao5Solves));

								const ao12Solves = usefulSolves.slice(index, index + 12);
								const ao12 =
									ao12Solves.length < 12
										? "--"
										: formatTime(getAverage(ao12Solves));

								return (
									<tr
										key={solve.id}
										onContextMenu={(event) => {
											event.preventDefault();
											setSelectedSolve(solve);
											setMenuPosition({
												x: event.clientX,
												y: event.clientY,
											});
											console.log(solve, selectedSolve);
										}}
									>
										<td>{usefulSolves.length - index}</td>
										<td>
											{formatTime(
												solve.time + (solve.penalty != -1 ? solve.penalty : 0),
											)}
										</td>
										<td>{ao5}</td>
										<td>{ao12}</td>
										<td>{solve.scramble}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</section>
			{menuPosition && (
				<div
					className="context-menu"
					style={{
						left: menuPosition.x,
						top: menuPosition.y,
					}}
				>
					<button onClick={handleDelete}>Delete</button>
					<button onClick={handlePlusTwo}>+2</button>
					<button>DNF</button>
				</div>
			)}
			;
		</section>
	);
}

export default TimerWorkspace;
