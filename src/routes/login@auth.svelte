<script>
	import axios from '../common/axios';
	import Button from '../lib/Button.svelte';
	import Input from '../lib/Input.svelte';
	import { goto } from '$app/navigation';

	let email = 'lucas@email.com';
	let password = '1234567';
	let isLoading = false;
	let isError = false;

	async function login() {
		isLoading = true;
		try {
			const response = await axios.post('/login', { email, password });
			console.log(response.data);
			localStorage.setItem('token', response.data.token);
			goto('/');
		} catch (error) {
			isError = true;
			isLoading = false;
		}
	}
</script>

<div class="w-full max-w-lg">
	<h1 class="text-center mb-8 text-2xl font-bold">Spring To-do</h1>

	<form on:submit|preventDefault={login} class="flex flex-col gap-2 items-center">
		<Input placeholder="Email" type="email" bind:value={email} icon="iconoir:mail" required />

		<Input
			placeholder="Senha"
			type="password"
			bind:value={password}
			icon="iconoir:key-alt-remove"
			required
		/>

		<Button type="submit" className="mt-8 min-w-[20ch]" {isLoading}>Entrar</Button>
	</form>

	{#if isError}
		<p>Ops! Parece que você digitou algo errado.</p>
	{/if}

	<p class="text-center mt-10">Ainda não possui uma conta? <a href="/register">Criar aqui</a></p>
</div>

<svelte:head>
	<title>Login</title>
</svelte:head>
