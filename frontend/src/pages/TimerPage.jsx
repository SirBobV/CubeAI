import { useState } from "react";

function TimerToolbar({
	currentEvent,
	onEventChange,
	currentSession,
	onSessionChange,
}) {
	return (
		<header className="timer-toolbar">
			<div>
				<h2>Timer</h2>
				<p>
					{currentEvent} • {currentSession} session
				</p>
			</div>

			<div className="timer-actions">
				<select
					className="timer-select"
					value={currentEvent}
					onChange={(event) => onEventChange(event.target.value)}
				>
					<option value="2x2">2x2</option>
					<option value="3x3">3x3</option>
					<option value="4x4">4x4</option>
					<option value="5x5">5x5</option>
					<option value="OH">OH</option>
					<option value="Blind">Blind</option>
				</select>
				<select
					className="timer-select"
					value={currentSession}
					onChange={(event) => onSessionChange(event.target.value)}
				>
					<option value="Main">Main</option>
					<option value="Practice">Practice</option>
					<option value="Warmup">Warmup</option>
				</select>

				<button>Settings</button>
			</div>
		</header>
	);
}

function ScrambleArea() {
	return (
		<section className="scramble-area">
			<div className="scramble-text-panel">
				<p className="scramble-text">
					R U R&apos; F2 D L2 U&apos; B R2 F&apos; U2
				</p>
			</div>

			<div className="scramble-visual">Visual scramble</div>
		</section>
	);
}

function TimerStage() {
	return (
		<section className="timer-stage">
			<h3 className="timer-display">0.00</h3>
		</section>
	);
}

function TimerWorkspace() {
	return (
		<section className="timer-workspace">
			<aside className="stats-column">
				<div className="stats-panel">
					<h3>Best</h3>

					<div className="stat-row">
						<span>Single</span>
						<strong>--</strong>
					</div>

					<div className="stat-row">
						<span>Ao5</span>
						<strong>--</strong>
					</div>

					<div className="stat-row">
						<span>Ao12</span>
						<strong>--</strong>
					</div>
				</div>

				<div className="stats-panel">
					<h3>Current</h3>

					<div className="stat-row">
						<span>Single</span>
						<strong>--</strong>
					</div>

					<div className="stat-row">
						<span>Ao5</span>
						<strong>--</strong>
					</div>

					<div className="stat-row">
						<span>Ao12</span>
						<strong>--</strong>
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
							<tr>
								<td>1</td>
								<td>--</td>
								<td>--</td>
								<td>--</td>
								<td>R U R&apos; F2 D L2...</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		</section>
	);
}

function TimerPage() {
	const [currentEvent, setCurrentEvent] = useState("3x3");
	const [currentSession, setCurrentSession] = useState("Main");

	return (
		<main className="main-panel timer-page">
			<TimerToolbar
				currentEvent={currentEvent}
				onEventChange={setCurrentEvent}
				currentSession={currentSession}
				onSessionChange={setCurrentSession}
			/>
			<ScrambleArea />
			<TimerStage />
			<TimerWorkspace />
		</main>
	);
}

export default TimerPage;
