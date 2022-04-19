<script>
	import Icon from '@iconify/svelte';

	export let type = 'text';
	export let placeholder = '';
	export let value = '';
	export let icon = '';
	export let required = false;
	export let minlength = '';
	export let maxlength = '';

	function typeAction(node) {
		node.type = type;
	}
</script>

<div class="w-full relative">
	<input
		use:typeAction
		{placeholder}
		{required}
		{minlength}
		{maxlength}
		bind:value
		class="bg-primary bg-opacity-10 py-3 px-8 rounded-3xl w-full focus:outline-primary"
		class:px-16={icon}
	/>

	{#if icon}
		<Icon
			{icon}
			class="absolute top-[50%] translate-y-[-50%] left-8 text-[1.3em] pointer-events-none"
		/>
	{/if}
</div>
