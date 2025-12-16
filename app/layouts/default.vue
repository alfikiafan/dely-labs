<script setup>
const head = useLocaleHead({
	addDirAttribute: true,
	identifierAttribute: "id",
	addSeoAttributes: true,
});
</script>

<template>
	<div class="min-h-screen flex flex-col font-sans text-white">
		<AppHeader />

		<main class="flex-grow">
			<slot />
		</main>

		<AppFooter />
	</div>
</template>

<style>
::-webkit-scrollbar {
	width: 8px;
}
::-webkit-scrollbar-track {
	background: #020617;
}
::-webkit-scrollbar-thumb {
	background: #334155;
	border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
	background: #475569;
}
</style>
