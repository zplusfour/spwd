<script lang="ts">
	export var items: any[];
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
	{#each items as item}
		<div>
			<span>{item.app}</span>
			<span>{item.password}</span>
		</div>
	{/each}
</div>
