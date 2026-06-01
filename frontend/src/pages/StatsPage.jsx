function formatTime(milliseconds) {
	return (milliseconds / 1000).toFixed(2);
}

function StatsPage({ solves }) {
	const totalTime = solves.reduce((sum, solve) => {
		return sum + solve.time;
	}, 0);

	const averageTime = solves.length > 0 ? totalTime / solves.length : 0;

	return (
		<main className="main-panel">
			<h2>Stats</h2>

			<section className="stats-panel">
				<h3>Overall Average</h3>
				<strong>{solves.length > 0 ? formatTime(averageTime) : "--"}</strong>
			</section>
		</main>
	);
}

export default StatsPage;
