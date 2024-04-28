<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import { goto } from '$app/navigation';
	import { route } from '$lib/ROUTES.js';
</script>

<section class="container grid-cols-[3fr,2fr] gap-8 overflow-hidden p-8 lg:grid">
	<div class="max-w-screen absolute -left-20 -top-32 -z-10 h-screen w-full blur-3xl">
		<div class="bg-primary relative left-[50%] top-[30%] h-[300px] w-[300px] opacity-10"></div>
		<div class="bg-primary relative right-[20%] top-[20%] h-[300px] w-[300px] opacity-10"></div>
		<div class="bg-primary -top-[1x 0%] relative left-[20%] h-[300px] w-[300px] opacity-10"></div>
	</div>
	<div class="hidden overflow-hidden rounded-xl lg:block">
		<enhanced:img
			class="h-full w-full object-cover"
			src="$assets/auth/login_img.png"
			alt="login_img"
		>
		</enhanced:img>
	</div>
	<div class="flex flex-col items-center gap-4 text-center">
		<Tabs.Root value="account">
			<Tabs.List
				class="bg-muted/75 h-auto min-w-52 gap-2 p-2 backdrop-blur-xl backdrop-saturate-150"
			>
				<Tabs.Trigger
					class="flex-1 px-4 py-3"
					on:click={() => goto(route('/auth/login'))}
					value="password">Login</Tabs.Trigger
				>

				<Tabs.Trigger
					class="flex-1 px-4 py-3"
					on:click={() => goto(route('/auth/register'))}
					value="account">Register</Tabs.Trigger
				>
			</Tabs.List>
		</Tabs.Root>

		<div class="">
			<slot />
		</div>
	</div>
</section>
