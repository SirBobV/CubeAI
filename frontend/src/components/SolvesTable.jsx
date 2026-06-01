function formatTime(milliseconds) {
	return (milliseconds / 1000).toFixed(2);
}

function SolvesTable({ solves }) {
	return (
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
						{solves.map((solve, index) => {
							const ao5Solves = solves.slice(index, index + 5);
							const ao5 =
								ao5Solves.length < 5
									? "--"
									: formatTime(
											ao5Solves.reduce((sum, solve) => sum + solve.time, 0) / 5,
										);

							const ao12Solves = solves.slice(index, index + 12);
							const ao12 =
								ao12Solves.length < 12
									? "--"
									: formatTime(
											ao12Solves.reduce((sum, solve) => sum + solve.time, 0) /
												12,
										);

							return (
								<tr key={solve.id}>
									<td>{solves.length - index}</td>
									<td>{formatTime(solve.time)}</td>
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
	);
}

export default SolvesTable;
