<script>
	import axios from '../common/axios';
	import Input from '../lib/Input.svelte';
	import Button from '../lib/Button.svelte';

	let name = 'lucas',
		email = 'lucas@email.com',
		password,
		isLoading = false;

	async function register() {
		isLoading = true;
		try {
			const response = await axios.post('/users/register', { name, email, password });
		} catch (error) {
			console.log(error.response);
			isLoading = false;
		}
	}
</script>

<div class="w-full max-w-lg">
	<h1 class="text-center mb-8 text-2xl font-bold">Spring To-do</h1>

	<form on:submit|preventDefault={register} class="flex flex-col gap-2 items-center">
		<Input placeholder="Nome" type="text" bind:value={name} icon="iconoir:user" required />

		<Input placeholder="Email" type="email" bind:value={email} icon="iconoir:mail" required />

		<Input
			placeholder="Senha"
			type="password"
			bind:value={password}
			icon="iconoir:key-alt-remove"
			required
			minlength="8"
		/>

		<Button type="submit" className="mt-8 min-w-[20ch]" {isLoading}>Cadastrar</Button>
	</form>

	<p class="text-center mt-10">Já possui uma conta? <a href="/login">Entre aqui</a></p>
</div>

<svelte:head>
	<title>Cadastro</title>
</svelte:head>
