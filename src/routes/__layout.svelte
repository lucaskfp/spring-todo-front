<script>
	import '../tailwind.css';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	let isAuth = false;

	if (browser) {
		if (!localStorage.getItem('token')) {
			goto('/login');
		} else {
			isAuth = true;
		}
	}
</script>

{#if isAuth}
	<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
		<Header />

		<main class="px-4 container mx-auto">
			<slot><!-- optional fallback --></slot>
		</main>

		<Footer />
	</div>
{/if}
