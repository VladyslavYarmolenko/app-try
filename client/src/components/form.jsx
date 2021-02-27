import { useState, /* useEffect */ } from "react";

export default function Form() {
	const [ userID, setUserID ] = useState("");
	const [ name, setName ] = useState("");
	const [ sending, setSending ] = useState(false);

	return (
		<>
			<p>
				{userID ? (
					<span>Created user {userID}</span>
					) : (
					<span>No users created yet</span>
				)}
			</p>

			<form
				onSubmit={async (event) => {
					event.preventDefault();

					if (!name)
						return;

					setSending(true);

					const response = await fetch("http://localhost:8081/users", {
						method: "POST",
						body: { name },
					});

					const { result: id } = await response.json();

					setUserID(id);
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

				<button
					type="submit"
					disabled={sending}
				>Send</button>
			</form>
		</>
	);
}
