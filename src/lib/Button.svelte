<script>
	import Icon from '@iconify/svelte';

	export let type = 'button';
	export let className = '';
	export let full = false;
	export let isDisabled = false;
	export let isLoading = false;
	export let icon = '';
	export let variant = '';
</script>

<button
	{type}
	class={'btn ' + className}
	class:w-full={full}
	class:disabled={isDisabled}
	class:pointer-events-none={isLoading || isDisabled}
>
	<span
		class="content relative z-10 flex justify-center items-center gap-3"
		class:opacity-0={isLoading}
	>
		{#if icon}
			<Icon {icon} class="text-[1.3em]" />
		{/if}
		<span class="capitalize">
			<slot><!-- optional fallback --></slot>
		</span>
	</span>

	<span class="layer" />

	{#if isLoading}
		<span
			class="z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center text-2xl"
		>
			<Icon icon="eos-icons:loading" />
		</span>
	{/if}
</button>

<style>
	.btn {
		@apply relative bg-primary text-white px-4 font-medium overflow-hidden rounded-3xl min-h-[40px] transition-all duration-200;
	}

	.btn:hover {
		@apply shadow-lg;
	}

	.disabled {
		@apply bg-gray-700 bg-opacity-10  text-gray-700 text-opacity-50 cursor-wait;
	}

	.layer {
		@apply absolute left-0 top-0 w-full h-full bg-current opacity-0 transition-all duration-200;
	}

	.btn:hover .layer {
		@apply opacity-[8%];
	}

	.btn:focus .layer {
		@apply opacity-[12%];
	}
</style>
