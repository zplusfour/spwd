<script lang="ts">
	import * as fs from "fs";
	// import { config } from "dotenv";
	// config();

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
		console.log(json);
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
			<span>app name: {item.app.split("-")[0]}</span><br/><br/>
			<span>password: {item.password.split("-")[0]} <b>hashed: {item.password.split("-")[1]}</b></span><br/><br/>
		</div>
	{/each}
</div>
