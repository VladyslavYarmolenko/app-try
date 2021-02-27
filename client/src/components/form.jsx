import { useState, /* useEffect */ } from "react";

export default function Form() {
	const [ name, setName ] = useState("");

	return (
		<>
			<form>
				<p>
					<span>Name:</span>
					<input
						type="text"
						name="name"
						defaultValue={name}
						onInput={(event) => {
							setName(event.currentTarget.value);
						}}
					/>
				</p>

				<button type="submit">Send</button>
			</form>

			<p>{name}</p>
		</>
	);
}
