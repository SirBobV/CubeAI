import { useEffect, useState, useRef } from "react";

function formatTime(milliseconds) {
	return (milliseconds / 1000).toFixed(2);
}

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

function TimerStage({ displayTime, isHoldingSpace, isReadyToStart }) {
	let timerClassName = "timer-display";

	if (isHoldingSpace && !isReadyToStart) {
		timerClassName += " timer-display-danger";
	}

	if (isHoldingSpace && isReadyToStart) {
		timerClassName += " timer-display-ready";
	}

	return (
		<section className="timer-stage">
			<h3 className={timerClassName}>{displayTime}</h3>
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

	const [isRunning, setIsRunning] = useState(false);
	const [startTime, setStartTime] = useState(null);
	const [elapsedTime, setElapsedTime] = useState(0);

	const [isHoldingSpace, setIsHoldingSpace] = useState(false);
	const [isReadyToStart, setIsReadyToStart] = useState(false);

	const readyTimeoutRef = useRef(null);

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.code !== "Space") {
				return;
			}

			event.preventDefault();

			if (isRunning || isHoldingSpace) {
				return;
			}

			setIsHoldingSpace(true);
			setIsReadyToStart(false);

			readyTimeoutRef = setTimeout(() => {
				setIsReadyToStart(true);
			}, 500);
		}

		function handleKeyUp(event) {
			if (event.code !== "Space") {
				return;
			}

			event.preventDefault();

			if (isRunning) {
				setIsRunning(false);
				return;
			}

			if (isReadyToStart) {
				setElapsedTime(0);
				setStartTime(Date.now());
				setIsRunning(true);
			}

			setIsHoldingSpace(false);
			setIsReadyToStart(false);
			clearTimeout(readyTimeoutId);
		}

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
			clearTimeout(readyTimeoutRef);
		};
	}, [isRunning, isHoldingSpace, isReadyToStart]);
	useEffect(() => {
		if (!isRunning) {
			return;
		}

		const intervalId = setInterval(() => {
			setElapsedTime(Date.now() - startTime);
		}, 10);

		return () => {
			clearInterval(intervalId);
		};
	}, [isRunning, startTime]);

	return (
		<main
			className={`main-panel timer-page ${isRunning ? "timer-page-running" : ""}`}
		>
			{!isRunning && (
				<>
					<TimerToolbar
						currentEvent={currentEvent}
						onEventChange={setCurrentEvent}
						currentSession={currentSession}
						onSessionChange={setCurrentSession}
					/>
					<ScrambleArea />
				</>
			)}
			<TimerStage
				displayTime={formatTime(elapsedTime)}
				isHoldingSpace={isHoldingSpace}
				isReadyToStart={isReadyToStart}
			/>
			{!isRunning && (
				<>
					<TimerWorkspace />
				</>
			)}
		</main>
	);
}

export default TimerPage;
