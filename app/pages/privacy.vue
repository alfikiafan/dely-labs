<script setup>
const { locale } = useI18n();
definePageMeta({ layout: "default" });
</script>

<template>
	<div class="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-void-900">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
				{{ $t("legal.privacy_title") }}
			</h1>
			<p class="mt-6 text-base leading-7 text-gray-400">
				{{ $t("legal.last_updated") }}
			</p>
		</div>

		<div class="mx-auto mt-16 max-w-2xl text-gray-300 leading-7 space-y-6">
			<div v-if="locale === 'id'">
				<p>
					Di Dely Labs, privasi Anda adalah prioritas utama kami. Kebijakan
					Privasi ini menjelaskan jenis informasi yang kami kumpulkan dan
					bagaimana kami menggunakannya.
				</p>
				<h2 class="text-xl font-bold text-white mt-8">
					1. Informasi yang Kami Kumpulkan
				</h2>
				<p>
					Karena arsitektur kami berbasis <strong>Client-Side First</strong>,
					kami meminimalkan pengumpulan data. Mayoritas alat kami memproses data
					langsung di browser Anda tanpa mengirimkannya ke server kami.
				</p>
				<h2 class="text-xl font-bold text-white mt-8">2. Log File</h2>
				<p>
					Dely Labs mengikuti prosedur standar menggunakan file log untuk
					keperluan analitik infrastruktur dasar.
				</p>
			</div>

			<div v-else>
				<p>
					At Dely Labs, your privacy is our top priority. This Privacy Policy
					outlines the types of information we collect and how we use it.
				</p>
				<h2 class="text-xl font-bold text-white mt-8">
					1. Information We Collect
				</h2>
				<p>
					Due to our <strong>Client-Side First</strong> architecture, we
					minimize data collection. Most of our tools process data directly in
					your browser without sending it to our servers.
				</p>
				<h2 class="text-xl font-bold text-white mt-8">2. Log Files</h2>
				<p>
					Dely Labs follows a standard procedure of using log files for basic
					infrastructure analytics.
				</p>
			</div>
		</div>
	</div>
</template>
