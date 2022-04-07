<script lang="ts">
	import CopyToClipboard from "svelte-copy-to-clipboard";

	const handleSuccessfullyCopied = (e) => {
		console.log("Copied! ", e);
	};

	const handleFailedCopy = () => {
		console.log("failed");
	}

	const showEditForm = () => {
		const form = document.getElementById("editForm");
		if (form.style.display === "none") {
			form.style.display = "block";
		} else {
			form.style.display = "none";
		}
	}

	interface Item {
		app: string;
		password: string;
	}

	var URL = "http://localhost:3000"; // will change that later after I deploy it on Replit

	// fetch data from /api/pwds
	export var pwds: Item[] = [];
	
	(async () => {
		const fpwds = await fetch(`${URL}/api/pwds`);
		const json: Item[] = await fpwds.json();
		pwds = json;
	})();

</script>
<div>
	<form action="/api/add" method="post">
		<input name="app" id="app" type="text" placeholder="app name" />
		<input
			name="password"
			id="password"
			type="password"
			placeholder="password"
		/>
		<input type="submit" value="Add" />
	</form>

	<!-- items here -->
	{#each pwds as item}
		<div>
			<span>{item.app.split("-")[0]}</span>
			<CopyToClipboard text={item.password.split("-")[0]} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
				<button on:click={copy}>copy password</button>
			</CopyToClipboard>
			<form action="/api/del/{item.app}" method="post">
				<button type="submit">delete</button>
			</form>
			<button on:click={showEditForm}>edit</button>
			<form id="editForm" action="/api/edit/{item.app}" method="post">
				<input name="app" id="app" type="text" placeholder="app name" />
				<input
					name="password"
					id="password"
					type="password"
					placeholder="password"
				/>
				<input type="submit" value="edit" />
			</form>
		</div>
	{/each}
</div>

<style>
	form {
		/* display: flex; */
		flex-direction: column;
		align-items: left;
	}

	input {
		margin: 10px;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	button {
		margin: 10px;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	div {
		display: flex;
		/* flex-direction: column; */
		align-items: center;
	}

	span {
		margin: 10px;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	#editForm {
		display: none;
	}
</style>