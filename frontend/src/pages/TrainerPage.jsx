import { useState } from "react";

function GPTcontainer({ messages }) {
	return (
		<div className="outputs">
			{messages.map((message, index) => (
				<h3 key={index} className={message.sender}>
					{message.text}
				</h3>
			))}
		</div>
	);
}

function InputBox({ answer, sendAnswer, setAnswer, handleKeyDown }) {
	return (
		<div className="inputs">
			<textarea
				value={answer}
				onChange={(e) => setAnswer(e.target.value)}
				onKeyDown={handleKeyDown}
				placeholder="Enter algorithm..."
			/>
			<button onClick={sendAnswer}>➤</button>
		</div>
	);
}

function TrainerPage() {
	const [messages, setMessages] = useState([]);
	const [answer, setAnswer] = useState("");

	function sendAnswer() {
		if (!answer.trim()) return;

		console.log("Sending:", answer);

		const newMessage = {
			text: answer,
			sender: "user",
		};

		const newResponse = {
			text: "nah",
			sender: "bot",
		};
		setMessages([...messages, newMessage, newResponse]);

		setAnswer("");
	}

	function handleKeyDown(e) {
		// Enter = send
		// Shift + Enter = new line
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			sendAnswer();
		}
	}
	return (
		<main className="main-panel">
			<h2>Trainer</h2>
			<GPTcontainer messages={messages} />
			<InputBox
				answer={answer}
				sendAnswer={sendAnswer}
				setAnswer={setAnswer}
				handleKeyDown={handleKeyDown}
			/>
		</main>
	);
}

export default TrainerPage;
