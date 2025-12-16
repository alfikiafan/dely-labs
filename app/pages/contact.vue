<script setup>
definePageMeta({
	layout: "default",
});
</script>

<template>
	<div
		class="relative isolate bg-void-900 min-h-screen flex items-center justify-center px-6"
	>
		<div
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary-500/10 blur-[100px] rounded-full pointer-events-none"
		></div>

		<div class="relative z-10 max-w-2xl text-center">
			<div class="mb-6 flex justify-center text-primary-400">
				<Icon name="lucide:mail-open" size="64" />
			</div>

			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
				{{ $t("contact.title") }}
			</h1>

			<p class="text-lg leading-8 text-gray-400 mb-10 max-w-xl mx-auto">
				{{ $t("contact.subtitle") }}
			</p>

			<a
				href="mailto:hello@delylabs.com"
				class="inline-flex items-center gap-3 rounded-full bg-primary-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary-500/20 hover:bg-primary-500 hover:scale-105 transition-all duration-300"
			>
				<Icon name="lucide:send" size="20" />
				hello@delylabs.com
			</a>

			<p class="mt-8 text-sm text-gray-500">
				{{ $t("contact.response_time") }}
			</p>
		</div>
	</div>
</template>
