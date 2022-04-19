<script>
	import '../tailwind.css';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

	let isNotAuth = false;

	if (browser) {
		if (localStorage.getItem('token')) {
			goto('/');
		} else {
			isNotAuth = true;
		}
	}
</script>

{#if isNotAuth}
	<main class="min-h-screen flex justify-center items-center">
		<slot><!-- optional fallback --></slot>
	</main>
{/if}
