<script>
	import '../tailwind.css';
	import { goto } from '$app/navigation';
	import { browser } from '$app/env';

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
		<header class="bg-slate-300 p-4">header</header>

		<main>
			<slot><!-- optional fallback --></slot>
		</main>

		<footer class="bg-slate-300 p-4">footer</footer>
	</div>
{/if}
