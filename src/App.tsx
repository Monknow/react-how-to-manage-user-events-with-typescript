import React from "react";
import {ButtonHTMLAttributes} from "react";

interface MessageProps {
	text: string;
	onClick: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}

function Message({onClick, text}: MessageProps): JSX.Element {
	return (
		<div>
			<button onClick={onClick}>{text}</button>
		</div>
	);
}

function Game() {
	return (
		<div>
			<Message
				onClick={() => {
					alert("I was clicked!");
				}}
				text="Click me!"></Message>
		</div>
	);
}

export default Game;
