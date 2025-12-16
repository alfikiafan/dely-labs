<script setup>
const siteName = "Dely Labs";
const siteDesc =
	"Secure, client-side first digital utilities. From PDF signing to data conversion, processed directly in your browser.";
const siteImage = "/dely-labs-og.png";

useSeoMeta({
	title: "Digital Tools Ecosystem",
	ogTitle: `${siteName} - Digital Tools Ecosystem`,
	description: siteDesc,
	ogDescription: siteDesc,
	ogImage: siteImage,
	twitterCard: "summary_large_image",
	twitterImage: siteImage,
	themeColor: "#111827",
});

useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk
			? `${titleChunk} - ${siteName}`
			: `${siteName} - Digital Tools Ecosystem`;
	},
});
</script>

<template>
	<Body
		class="antialiased bg-void-900 text-white selection:bg-primary-500 selection:text-white"
	>
		<NuxtLayout>
			<NuxtLoadingIndicator color="#D946EF" />
			<NuxtPage />
		</NuxtLayout>
	</Body>
</template>
