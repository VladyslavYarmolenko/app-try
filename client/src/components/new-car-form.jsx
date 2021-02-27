import { useState } from "react";

export default function NewCarForm() {
	const [ id, setID ] = useState("");
	const [ name, setName ] = useState("");
	const [ age, setAge ] = useState(-1);
	const [ sending, setSending ] = useState(false);

	return (
		<>
			<h2>Create a new car</h2>

			<form
				method="post"
				onSubmit={async (event) => {
					event.preventDefault();

					if (!name || !age)
						return;

					setSending(true);

					const response = await fetch("http://localhost:8081/cars", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ name, age }),
					});

					const { result: id } = await response.json();

					setID(id);
					setSending(false);
				}}
			>
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
				<p>
					<span>Age:</span>
					<input
						type="number"
						name="age"
						min={0}
						max={135}
						step={1}
						defaultValue={age}
						onInput={(event) => {
							setAge(+event.currentTarget.value);
						}}
					/>
				</p>

				<button type="submit" disabled={sending}>Create</button>
			</form>

			<p>
				{id ? (
					<span>Car <code>{id}</code> has been</span>
					) : (
					<span>No car created yet</span>
				)}
			</p>
		</>
	);
}
