import { useEffect, useState, useRef } from "react";
import SolvesTable from "../components/SolvesTable";

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
					<option value="6x6">6x6</option>
					<option value="7x7">7x7</option>
					<option value="OH">OH</option>
					<option value="FMC">FMC</option>
					<option value="3BLD">3BLD</option>
					<option value="4BLD">4BLD</option>
					<option value="5BLD">5BLD</option>
					<option value="Megaminx">Megaminx</option>
					<option value="Pyraminx">Pyraminx</option>
					<option value="Skewb">Skewb</option>
					<option value="Square-1">Square-1</option>
					<option value="Clock"></option>
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

function ScrambleArea({ currentScramble }) {
	return (
		<section className="scramble-area">
			<div className="scramble-text-panel">
				<p className="scramble-text">{currentScramble}</p>
			</div>
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

function TimerWorkspace({ solves }) {
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
			<SolvesTable solves={solves} />
		</section>
	);
}

function TimerPage({ solves, setSolves }) {
	const [currentEvent, setCurrentEvent] = useState("3x3");
	const [currentSession, setCurrentSession] = useState("Main");

	const [isRunning, setIsRunning] = useState(false);
	const [startTime, setStartTime] = useState(null);
	const [elapsedTime, setElapsedTime] = useState(0);

	const [isHoldingSpace, setIsHoldingSpace] = useState(false);
	const [isReadyToStart, setIsReadyToStart] = useState(false);

	const [currentScramble, setCurrentScramble] = useState(
		"R U R' F2 D L2 U' B R2 F' U2",
	);

	const readyTimeoutRef = useRef(null);
	const isRunningRef = useRef(false);
	const isHoldingSpaceRef = useRef(false);
	const isReadyToStartRef = useRef(false);
	const startTimeRef = useRef(null);
	const currentScrambleRef = useRef(currentScramble);
	const currentEventRef = useRef(currentEvent);
	const currentSessionRef = useRef(currentSession);
	const didBailRef = useRef(false);

	useEffect(() => {
		isRunningRef.current = isRunning;
		isHoldingSpaceRef.current = isHoldingSpace;
		isReadyToStartRef.current = isReadyToStart;
	}, [isRunning, isHoldingSpace, isReadyToStart]);

	useEffect(() => {
		currentScrambleRef.current = currentScramble;
		currentEventRef.current = currentEvent;
		currentSessionRef.current = currentSession;
	}, [currentScramble, currentEvent, currentSession]);

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.code !== "Space") {
				return;
			}

			event.preventDefault();

			if (isRunningRef.current || isHoldingSpaceRef.current) {
				return;
			}

			setIsHoldingSpace(true);
			isHoldingSpaceRef.current = true;
			setIsReadyToStart(false);
			isReadyToStartRef.current = false;

			readyTimeoutRef.current = setTimeout(() => {
				setIsReadyToStart(true);
				isReadyToStartRef.current = true;
			}, 500);
		}

		function handleKeyUp(event) {
			if (event.code !== "Space") {
				return;
			}

			event.preventDefault();

			if (isRunningRef.current) {
				const finalTime = Date.now() - startTimeRef.current;

				setElapsedTime(finalTime);

				const newSolve = {
					id: crypto.randomUUID(),
					time: finalTime,
					scramble: currentScrambleRef.current,
					event: currentEventRef.current,
					session: currentSessionRef.current,
					createdAt: new Date().toISOString(),
				};

				setSolves((currentSolves) => [newSolve, ...currentSolves]);
				setIsRunning(false);
				isRunningRef.current = false;
				return;
			}

			if (didBailRef.current) {
				didBailRef.current = false;
				return;
			}

			if (isReadyToStartRef.current) {
				const now = Date.now();

				setElapsedTime(0);
				setStartTime(now);
				startTimeRef.current = now;
				setIsRunning(true);
				isRunningRef.current = true;
			}

			setIsHoldingSpace(false);
			isHoldingSpaceRef.current = false;
			setIsReadyToStart(false);
			isReadyToStartRef.current = false;
			clearTimeout(readyTimeoutRef.current);
		}

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
			clearTimeout(readyTimeoutRef.current);
		};
	}, []);
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

	useEffect(() => {
		function handleBail(event) {
			if (event.key !== "x") {
				return;
			}
			if (isHoldingSpace && isReadyToStart) {
				didBailRef.current = true;
				setIsHoldingSpace(false);
				isHoldingSpaceRef.current = false;
				setIsReadyToStart(false);
				isReadyToStartRef.current = false;
				clearTimeout(readyTimeoutRef.current);
				return;
			}
		}
		window.addEventListener("keydown", handleBail);

		return () => {
			window.removeEventListener("keydown", handleBail);
		};
	});
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
					<ScrambleArea currentScramble={currentScramble} />
				</>
			)}
			<TimerStage
				displayTime={formatTime(elapsedTime)}
				isHoldingSpace={isHoldingSpace}
				isReadyToStart={isReadyToStart}
			/>
			{!isRunning && (
				<>
					<TimerWorkspace solves={solves} />
				</>
			)}
		</main>
	);
}

export default TimerPage;
